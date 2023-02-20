<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form  method="POST">
        @method('POST')
        @csrf
        <label>id_product</label>
        <input type="text" name="id_product">
        <label>name</label>
        <input type="text" name="name">
        <label>email</label>
        <input type="text" name="email">
        <label>phone</label>
        <input type="text" name="phone">
        <label>address</label>
        <input type="text" name="address">
        <label>total</label>
        <input type="text" name="total">
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">

        <button>submit</button>
    </form>
</body>
</html>