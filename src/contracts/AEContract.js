export default `contract RecheckRecords =

  record data_record = {
      recordId : hash,
      parentId : hash,
      trail : hash,
      trailSig : hash,
      extra0: hash,
      extra1: hash,
      creator : address,
      timestamp : int, 
      subRecords: int
    }

  record state = { creator : address, operators : map(address, bool), records : map(hash, data_record), subRecords: map(hash, map(string, hash)), subRecordsIndex : map(hash, int), trails : map(hash, hash), extras0 : map(hash, hash), extras1 : map(hash, hash) }

  private function _require(b : bool, err : string) =
    if(!b) abort(err)

  private function onlyOperators() : bool =
    _require(Call.caller == state.creator || state.operators[Call.caller], "Insufficient rights to change operator setting")
    true

  private function onlyOwners(recordId : hash) : bool =
    _require(state.records[recordId].creator == Call.origin, "Caller not allowed to add subrecords to this record.")
    true

  private function onlyUnique(recordId : hash) : bool =
    let empty = #0000000000000000000000000000000000000000000000000000000000000000
    let existingRecord = getRecord(recordId)
    _require(existingRecord.recordId == empty, "Record already exists.")
    true

  public entrypoint init() : state =
    { creator = Call.caller, operators = { } , records = { }, trails = { }, extras0 = {}, extras1 = {}, subRecords = {}, subRecordsIndex ={} }


  public stateful entrypoint setOperator(operator : address, access : bool) =

    onlyOperators()

    put(state{
      operators[operator] = access
      })

  public stateful entrypoint createRecord(recordId: hash, trail: hash, trailSig: hash) : bool =
    createSubRecord(recordId, recordId, trail, trailSig)

  public stateful entrypoint createSubRecord(recordId: hash, parentId: hash, trail: hash, trailSig: hash) : bool =
    let empty = #0000000000000000000000000000000000000000000000000000000000000000
    createSubRecordWithExtras2(recordId, parentId, trail, trailSig, empty, empty)

  public stateful entrypoint createSubRecordWithExtras2(recordId: hash, parentId: hash, trail: hash, trailSig: hash, extra0: hash, extra1:hash) : bool =
    onlyOperators()
    onlyUnique(recordId)
    
    put(state {
      records[recordId] = {
          recordId = recordId,
          parentId = parentId,
          trail = trail,
          trailSig = trailSig,
          extra0 = extra0,
          extra1 = extra1,
          creator = Call.origin,
          timestamp = Chain.timestamp,
          subRecords = 0
        },
      trails[trail] = recordId,
      extras0[extra0] = recordId,
      extras1[extra1] = recordId
      })

    if (recordId != parentId)
      let _subRecordsIndex = lookupByKey(parentId, state.subRecordsIndex, 0)
      put(state {
        subRecords[parentId][Int.to_str(_subRecordsIndex)] = recordId,
        subRecordsIndex[parentId] = lookupByKey(parentId, state.subRecordsIndex, 0) + 1
        })
    else
      put(state {
        subRecords[recordId] = {}
        })
    true

  public entrypoint getRecord(recordId : hash) : data_record =
    let empty = {recordId = #0000000000000000000000000000000000000000000000000000000000000000, parentId = #0000000000000000000000000000000000000000000000000000000000000000, trail = #0000000000000000000000000000000000000000000000000000000000000000, trailSig = #0000000000000000000000000000000000000000000000000000000000000000,  extra0 = #0000000000000000000000000000000000000000000000000000000000000000,  extra1 = #0000000000000000000000000000000000000000000000000000000000000000, creator = Call.caller, timestamp = 0, subRecords = 0}
    let recFound = lookupByKey(recordId, state.records, empty)
    let subRecordsNumber = countSubRecords(recordId)
    let result = {
      recordId = recFound.recordId,
      parentId = recFound.parentId,
      trail = recFound.trail,
      trailSig = recFound.trailSig,
      extra0 = recFound.extra0,
      extra1 = recFound.extra1,
      creator = recFound.creator,
      timestamp = recFound.timestamp,
      subRecords = subRecordsNumber
      }
    result

  public entrypoint getSubRecord(recordId : hash, subRecordIndex : int) : data_record =
    let empty = #0000000000000000000000000000000000000000000000000000000000000000
    let subsFound = lookupByKey(recordId, state.subRecords, {["0"] = empty})
    if (subsFound["0"] == empty)
      abort("No subrecords found for that record id")
    let subRecordFound = lookupByKeyStr(Int.to_str(subRecordIndex), subsFound, empty)
    getRecord(subRecordFound)

  public entrypoint countSubRecords(recordId: hash) =
    lookupByKey(recordId, state.subRecordsIndex, 0)

  public entrypoint verifyTrail(trail: hash) : data_record =
    let empty = #0000000000000000000000000000000000000000000000000000000000000000
    let recFound = lookupByKey(trail, state.trails, empty)
    getRecord(recFound)  

  public entrypoint verifyExtra0(extra : hash) =
    let empty = #0000000000000000000000000000000000000000000000000000000000000000
    let recFound = lookupByKey(extra, state.extras0, empty)
    getRecord(recFound)

  public entrypoint verifyExtra1(extra : hash) =
    let empty = #0000000000000000000000000000000000000000000000000000000000000000
    let recFound = lookupByKey(extra, state.extras1, empty)
    getRecord(recFound)

  private function lookupByKeyStr(k : string, m, v) =
    switch(Map.lookup(k, m))
      None    => v
      Some(x) => x

  private function lookupByKey(k : hash, m, v) =
    switch(Map.lookup(k, m))
      None    => v
      Some(x) => x


`;
