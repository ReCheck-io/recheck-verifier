<template>
  <div class="timelineWrap">
    <div class="blank"></div>
    <div class="timeline">
      <ul>
        <li>
          <span>Select network</span>
          <p>
            From the switch button select in which network you want to verify.
          </p>
        </li>
        <li>
          <span>Select File</span>
          <p>
            Drag the file that you want to verify to the specified area or
            attach it by click.
          </p>
        </li>
        <li>
          <span>Select action type</span>
          <p>
            You can verify if the file has been registered, uploaded, shared or
            opened.
          </p>
        </li>
        <li>
          <span>Enter sender ID</span>
          <p>
            You must enter sender ID or use MetaMask button for yours.
          </p>
        </li>
        <li>
          <span>Enter recipient ID</span>
          <p>
            If applicable you must enter recipient ID or use MetaMask button for
            yours.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.timelineWrap {
  display: flex;
  flex: 1 1 40%;
}

.blank {
  display: flex;
  flex: 1 1 50%;
}

.timeline {
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex: 1 1 60%;
  position: relative;
}
.timeline:after {
  content: "";
  position: absolute;
  display: flex;
  height: 100%;
  width: 4px;
  background-color: #9ddaf4;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  counter-reset: section;
  list-style-type: none;
}

li {
  width: 250px;
  height: 95px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #fff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
}

li::before {
  color: #fff;
  content: "";
  position: absolute;
  margin-top: -3px;
  font-weight: bold;
  left: -10px;
  width: 24px;
  height: 24px;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  background-color: #04558a;
  counter-increment: section;
  content: counters(section, ".");
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
}

p {
  display: flex;
  margin: 6px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

span::before {
  display: flex;
  content: " ";
  position: absolute;
  left: 28px;
  border: medium solid white;
  border-width: 14px 14px 14px 0;
  border-color: transparent white transparent transparent;
}
</style>
