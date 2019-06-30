<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrfToken" content="{{ csrf_token() }}">
    <title>Project Idea Holder</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app">
        <top-menu></top-menu>
        <router-view></router-view>
    </div>
    <script src="/js/app.js"></script>
</body>
</html>