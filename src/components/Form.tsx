"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";

import {
  Button,
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogHeader,
} from "@/components/ui";
import Dropzone from "@/components/Dropzone";
import { useNetworkState } from "@/contexts";
import { FILE_ACTIONS, NETWORK_OPTIONS } from "@/constants";
import { useVerifyHash, FormValues, useToast } from "@/hooks";
import { capitalizeFirstLetter, decodeUriParams, TxInfo } from "@/utils";

export default function VerifyForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [verificationData, setVerificationData] = useState<null | TxInfo>(null);

  const { toast } = useToast();
  const { verifyHash } = useVerifyHash();
  const { setSelectedNetwork, networkOptions, selectedNetwork } =
    useNetworkState();

  const form = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      isBeta: false,
      dataId: "",
      senderId: "",
      recipientId: "",
      actionType: undefined,
    },
  });

  const { handleSubmit, watch, formState, setValue, getValues } = form;

  const watchActionType = watch("actionType");

  const queryMap: Record<string, keyof FormValues | "network"> = {
    isB: "isBeta",
    net: "network",
    type: "actionType",
    dId: "dataId",
    sId: "senderId",
    rId: "recipientId",
  };

  useEffect(() => {
    const params = decodeUriParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        const mappedKey = queryMap[key];

        if (!mappedKey) return;

        if (mappedKey === "network") {
          const newNetwork = NETWORK_OPTIONS.find((x) => x.network === value);
          if (newNetwork && newNetwork.network !== selectedNetwork.network) {
            setSelectedNetwork(newNetwork);
          }
        } else if (mappedKey === "isBeta") {
          setValue("isBeta", JSON.parse(value as string) || false);
        } else {
          setValue(mappedKey, value as string);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: FormValues) => {
    const t = toast({
      variant: "default",
      title: "Please wait...",
      duration: undefined,
    });

    const result = await verifyHash(data);

    if (result.status) {
      t.dismiss();

      const dateCreated = new Date(result.data.timestamp);
      const utcDate = new Date(dateCreated.toUTCString()); // Convert to UTC

      const hours = utcDate.getUTCHours().toString().padStart(2, "0");
      const minutes = utcDate.getUTCMinutes().toString().padStart(2, "0");
      const seconds = utcDate.getUTCSeconds().toString().padStart(2, "0");

      const time = `${hours}:${minutes}:${seconds}`;

      const day = utcDate.getUTCDate().toString().padStart(2, "0");
      const month = utcDate.toLocaleString("en-US", {
        month: "long",
        timeZone: "UTC",
      });
      const year = utcDate.getUTCFullYear();

      const date = `${day} ${month} ${year}`;

      setVerificationData({
        ...result.data,
        actionType: data.actionType,
        date,
        time,
      });
      setIsOpen(true);
    } else {
      toast({
        variant: "destructive",
        title: "Verification Failed",
        description:
          "Verification on blockchain has failed. Could not find record with the given data.",
      });
    }
  };

  return (
    <div className="mx-auto flex w-1/2 flex-1 flex-col items-center p-4">
      <div className="w-full max-w-xl rounded-md border p-6 shadow-md">
        <Form {...form}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Dropzone />

            <FormField
              name="dataId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data ID</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base"
                      placeholder="Enter Data Identifier"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Select Network</FormLabel>
              <FormControl>
                <Select
                  value={selectedNetwork.network}
                  onValueChange={(value) => {
                    const newNetwork = networkOptions.find(
                      (x) => x.network === value,
                    );
                    if (
                      newNetwork &&
                      newNetwork.network !== selectedNetwork.network
                    ) {
                      setSelectedNetwork(newNetwork);
                    }
                  }}
                >
                  <SelectTrigger className="mb-4 h-11 bg-white text-base">
                    <SelectValue placeholder="Select Network" />
                  </SelectTrigger>
                  <SelectContent>
                    {networkOptions.map((option) => (
                      <SelectItem
                        key={option.network}
                        value={option.network}
                        className="text-base"
                      >
                        <div className="flex items-center">
                          <Image
                            src={option.img}
                            alt={option.title}
                            className="mr-2 size-6"
                            height={24}
                            width={24}
                          />
                          {option.title}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>

            <FormField
              name="actionType"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Action</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="h-11 bg-white text-base">
                        {watchActionType ? (
                          <span className="capitalize">{watchActionType}</span>
                        ) : (
                          <SelectValue placeholder="Select Action" />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {FILE_ACTIONS.map((option) => (
                          <SelectItem
                            key={option.actionType}
                            value={option.actionType}
                            className="text-base"
                          >
                            {option.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchActionType && (
              <FormField
                control={form.control}
                name="senderId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sender ID</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base"
                        placeholder="Sender ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {watchActionType &&
              !["email", "upload", "sign", "download"].includes(
                watchActionType,
              ) && (
                <FormField
                  control={form.control}
                  name="recipientId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient ID</FormLabel>
                      <FormControl>
                        <Input
                          className="text-base"
                          placeholder="Recipient ID"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

            {watchActionType === "email" && (
              <FormField
                control={form.control}
                name="recipientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Email</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base"
                        type="email"
                        placeholder="Recipient Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button
              type="submit"
              variant="secondary"
              className="mt-4 w-full"
              disabled={
                !formState.isValid || !watch("dataId") || !watch("senderId")
              }
            >
              Verify
            </Button>
          </form>
        </Form>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full sm:max-w-4xl">
          <DialogHeader className="flex flex-row items-center">
            <CheckCircledIcon className="mr-2 size-10 text-green-500" />{" "}
            <div>
              <DialogTitle className="flex items-center">
                Transaction Info
              </DialogTitle>
              <DialogDescription>
                Transaction verification result from blockchain
              </DialogDescription>
            </div>
          </DialogHeader>

          {verificationData && (
            <div>
              <p>
                This item is{" "}
                <span className="font-medium">
                  {capitalizeFirstLetter(verificationData.actionType)}ed
                </span>{" "}
                on <span className="font-medium">{selectedNetwork.title}</span>{" "}
                blockchain on{" "}
                <span className="font-medium">{verificationData.date}</span> at{" "}
                <span className="font-medium">{verificationData.time} </span> by{" "}
                <span className="font-medium">{getValues("senderId")}</span>.
              </p>
              <p className="font-medium">
                See below technical details about the recorded blockchain
                transaction.
              </p>

              <div className="mt-2 border-t border-gray-200">
                <dl className="">
                  <div className="flex flex-col py-2">
                    <dt className="text-base font-medium leading-6 text-gray-900">
                      Action Type:
                    </dt>
                    <dd className="text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {capitalizeFirstLetter(verificationData.actionType)}
                    </dd>
                  </div>
                  <div className="flex flex-col py-2">
                    <dt className="text-base font-medium leading-6 text-gray-900">
                      Data Hash:
                    </dt>
                    <dd className="text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {verificationData.recordId}
                    </dd>
                  </div>
                  <div className="flex flex-col py-2">
                    <dt className="text-base font-medium leading-6 text-gray-900">
                      Trail Hash:
                    </dt>
                    <dd className="text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {verificationData.trailHash}
                    </dd>
                  </div>
                  <div className="flex flex-col py-2">
                    <dt className="text-base font-medium leading-6 text-gray-900">
                      Trail Hash Signature:
                    </dt>
                    <dd className="text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {verificationData.trailHashSigHash}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <p className="my-8">
        Copyright &copy; {new Date().getFullYear()} - ReCheck B.V.
      </p>
    </div>
  );
}
