<!DOCTYPE html>
<html>

<head>
  <title>Currency Converter</title>
</head>

<body>
  <h1>Currency Converter</h1>
  <form method="post">
    <label>Amount:</label>
    <input type="text" name="amount"><br><br>

    <label>From Currency:</label>
    <select name="from_currency">
      <option value="USD">US Dollar</option>
      <option value="EUR">Euro</option>
      <option value="CAD">Canadian Dollar</option>
    </select><br><br>

    <label>To Currency:</label>
    <select name="to_currency">
      <option value="USD">US Dollar</option>
      <option value="EUR">Euro</option>
      <option value="CAD">Canadian Dollar</option>
    </select><br><br>

    <input type="submit" name="submit" value="Convert"><br><br>

    <?php
    $currencies = array(
      "USD" => 1,
      "EUR" => 0.85,
      "CAD" => 1.25
    );

    if (isset($_POST['submit'])) {
      $amount = $_POST['amount'];
      $from_currency = $_POST['from_currency'];
      $to_currency = $_POST['to_currency'];

      $converted_amount = $amount / $currencies[$from_currency] * $currencies[$to_currency];

      echo "<label>Result:</label>";
      echo "<input type='text' name='result' value='" . number_format($converted_amount, 2) . " " . $to_currency . "'><br><br>";
    }
    ?>
  </form>
</body>

</html>