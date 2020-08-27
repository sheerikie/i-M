const setEditModal = (iouid) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", `http://localhost:3000/iou/${iouid}`, false);
  xhttp.send();

  const iou = JSON.parse(xhttp.responseText);

  const { name, due_date, debtor, amount } = iou;

  document.getElementById("iouid").value = iouid;
  document.getElementById("name").value = name;
  document.getElementById("amount").value = amount;
  document.getElementById("debtor").value = debtor;
  document.getElementById("due_date").value = due_date;

  // setting up the action url for the iou
  document.getElementById(
    "editForm"
  ).action = `http://localhost:3000/iou/${iouid}`;
};

const deleteIou = (iouid) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `http://localhost:3000/iou/${iouid}`, false);
  xhttp.send();

  location.reload();
};

const loadIous = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/iou", false);
  xhttp.send();

  const ious = JSON.parse(xhttp.responseText);

  for (let iou of ious) {
    const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Borrower:  ${iou.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Transaction ID: ${iou.iouid}</h6>

                        <div>Debtor: ${iou.debtor}</div>
                        <div>Due date: ${iou.due_date}</div>
                        <div>Amount: ${iou.amount}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" 
                            data-target="#editiouModal" onClick="setEditModal(${iou.iouid})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.getElementById("ious").innerHTML =
      document.getElementById("ious").innerHTML + x;
  }
};

loadIous();
