## flashy.js jQuery plugin

<div>
	<img src="https://i.imgur.com/yRVwyGf.gif" title="source: imgur.com"/>
</div>

> The package requires jQuery in your html document.

```html
<html>
 <head>
  <title> Hello flashy </title>
 </head>
 <body>
  <script src="jquery/jquery.min.js"> </script>
 </body>
</html>
```

### Start by first cloning the ** Githud ** project in your application.

once downloaded you must include the following files:

```
css/
 - flashy.min.css
 - flashy.css
js/
 - flashy.min.js
 - flashy.js
```

> in the production please include the files minifiers not to overload the web page.

```html
<html>
 <head>
  <title> Hello flashy </title>
  <link rel="stylesheet" type="text/css" href="css/flashy.min.css">
 </head>
 <body>
  <script src="jquery/jquery.min.js"> </script>
  <script src="js/flashy.min.js"> </script>
 </body>
</html>
```

### Good start practice :)

After inclusion of flashy.min.js file or flashy.js you have a ```flashy``` variable that interacts directly with the package.

Here's how to say hello to your visitors each time you load the web page.

```html
<html>
 <head>
  <title> Hello flashy </title>
  <link rel="stylesheet" type="text/css" href="css/flashy.min.css">
 </head>
 <body>
  <script src="jquery/jquery.min.js"> </script>
  <script src="js/flashy.min.js"> </script>
  <script>
  flashy('Hello I'm flashy');
  </script>
 </body>
</html>
```

> Try it!

## 1 Colors

you want to change the appearance of flashy? then pass an object in second parameter as mentioned below:

```javascript
<script>
 flashy('Hello I'm flashy', {
    type: 'flashy__info'
 });
</script>
```

here are the types of effects available:

 - flashy__info
 - flashy__danger
 - flashy__success
 - flashy__warning

> Try it!


You have certainly understood that the effect types above are only ** CSS ** classes and therefore you have full possibility to add your types :)

## 2 Animation

Want to change the flashy animation? oh yes the package accepts ```animate.css```

in this case, please download and add ** Animate.css ** in your html document

```html
<html>
 <head>
  <title> Hello flashy </title>
  <link rel="stylesheet" type="text/css" href="css/flashy.min.css">
  <link rel="stylesheet" type="text/css" href="animate.css">
 </head>
  ...
</html>
```

So :

```javascript
<script>
 flashy('Hello I'm flashy', {
    animatedIn: 'animated wobble'//default bounceInRight
    animatedOut: 'animated rubberBand'//default bounceOutRight
 });
</script>
```

> Try it!


## 3 ESC key

Try to launch flashy in your browser then click on the ** ESC ** button!

you can disable it as below:

```javascript
<script>
 flashy('Hello I'm flashy', {
   quitESC: false
 });
</script>
```

> Try it!


## 4 Closing Icon

You can change the icon as below:

```javascript
<script>
 flashy('Hello I'm flashy', {
   icon: '<i class="fa fa-close"> </i>
 });
</script>
```


## 5 Time

Time is counted in mileseconde:

```javascript
<script>
 flashy('Hello I'm flashy', {
   timeout: 10000//default 5000 is 5s
 });
</script>
```


## 6 Class

Want to add extra CSS classes during the flashy release?

```javascript
<script>
 flashy('Hello I'm flashy', {
   addClass: "classname classname classmane"
 });
</script>
```


## 7 Stop

Do you want to cancel the flashy time so that flashy does not go away after its release?

```javascript
<script>
 flashy('Hello I'm flashy', {
   stop: true
 });
</script>
```


## 8 CallBack

Add an anonymous function that will be called at each flashy shutdown.

```javascript
<script>
 flashy('Hello I'm flashy', function () {
 alert('Flashy completed');
 });
</script>
```

# Current use

You can pass arguments to ** flashy ** in different ways:

* Pass a title to flashy

```javascript
<script>
 flashy('Hello I'm flashy');
</script>
```

```javascript
<script>
 flashy({title: 'Hello I'm flashy'});
</script>
```

These two codes above do exactly the same thing.

* Here are some more examples

```javascript
<script>
 flashy('Hello I'm flashy', {stop: true}, function () {
   alert('Thanks flashy');
 });
</script>
```

```javascript
<script>
 flashy({title: 'Ah, my flashy', stop: true}, function () {
   alert('Thanks flashy');
 });
</script>
```



All your concerns at chriskuika12@gmail.com or search me on Facebook **ZonkedCode**