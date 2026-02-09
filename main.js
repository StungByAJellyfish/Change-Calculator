function calculateChange() {
  const amountDue = parseFloat(document.getElementById('amount-due').value);
  const amountReceived = parseFloat(document.getElementById('amount-received').value);
  const change = amountReceived - amountDue;

  if (change < 0) {
    alert('Please verify the amounts entered.  The amount received is less than the amount due.');
    return;
    } else if (change===0) {
    alert('No change is due.  The amount received equals the amount due.');
    return;
    } 

  const dollars = Math.floor(change);
  const quarters = Math.floor((change - dollars) * 4);
  const dimes = Math.floor((change - dollars - quarters * 0.25) * 10);
  const nickels = Math.floor((change - dollars - quarters * 0.25 - dimes * 0.1) * 20);
  const pennies = Math.round((change - dollars - quarters * 0.25 - dimes * 0.1 - nickels * 0.05) * 100);

  document.getElementById('change-output').textContent = `The total change due is $${change.toFixed(2)}.  Below is the breakout:`;
  document.getElementById('dollars-output').textContent = `${dollars}`;
  document.getElementById('quarters-output').textContent = `${quarters}`;
  document.getElementById('dimes-output').textContent = `${dimes}`;
  document.getElementById('nickels-output').textContent = `${nickels}`;
  document.getElementById('pennies-output').textContent = `${pennies}`;
}