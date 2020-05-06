import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generateDocument = (userData, chainData) => {
  const docDefinition = {
    pageSize: "A4",
    content: [
      { text: "Caption", style: "caption" },
      { qr: userData.senderId, style: "qr" },
      {
        columns: [
          { width: "20%", text: "Sender ID: ", bold: true },
          { width: "auto", text: userData.senderId }
        ]
      },
      {
        columns: [
          {
            width: "20%",
            text: userData.receiverId ? "Receiver ID: " : "",
            bold: true
          },
          {
            width: "auto",
            text: userData.receiverId ? userData.receiverId : ""
          }
        ]
      },
      {
        columns: [
          { width: "20%", text: "Action type: ", bold: true },
          { width: "auto", text: userData.actionType }
        ]
      },
      {
        columns: [
          { width: "20%", text: "Date: ", bold: true },
          { width: "auto", text: chainData.date }
        ]
      },
      {
        columns: [
          { width: "20%", text: "Trail: ", bold: true },
          { width: "auto", text: chainData.trailHash }
        ]
      },
      {
        columns: [
          { width: "20%", text: "Trail Signature: ", bold: true },
          { width: "auto", text: chainData.trailHashSigHash }
        ]
      },
      {
        columns: [
          {
            width: "50%",
            text: "Date:____________",
            alignment: "left",
            margin: [0, 60]
          },
          {
            width: "50%",
            text: "Signatrue:____________",
            alignment: "right",
            margin: [0, 60]
          }
        ]
      }
    ],

    footer: {
      columns: [
        {
          text: "ReCheck BV",
          alignment: "center",
          fontSize: 12,
          link: "https://recheck.io/"
        }
      ]
    },
    watermark: {
      text: "ReCheck BV",
      color: "blue",
      opacity: 0.08,
      bold: true,
      italics: false
    },
    info: {
      title: "awesome Document",
      author: "john doe",
      subject: "subject of document",
      keywords: "keywords for document"
    },
    styles: {
      caption: {
        alignment: "center",
        lineHeight: 2,
        fontSize: 22,
        bold: true
      },
      qr: {
        alignment: "center",
        margin: [0, 32, 0, 72]
      }
    }
  };

  pdfMake
    .createPdf(docDefinition)
    .download(`${new Date().toLocaleDateString()}-ReCheck.pdf`);
};
