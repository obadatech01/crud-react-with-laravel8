<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CRUD APP REACT & LARAVEL</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link type="text/css" href="{{asset('css/app.css')}}" rel="stylesheet">

    </head>
    <body class="antialiased">
        <div class="container mt-4">
            <div id="app">

            </div>
        </div>

        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
