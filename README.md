# Trunc

The jQuery plugin which truncates text and adds "..." to the end if text has too many characters limited by consumer of plugin inputted value. Click on "..." allows you to see the whole text.

### Getting started
1. Download plugin from github. There are uncompressed(jquery-trunc.js) and compressed(jquery-trunc-min.js) version.

2. Add jquery-trunc.js or jquery-trunc.min.js to your project.

3. Add a `script` to your html:
   ```html
   <script src="jquery-trunc.js"></script>
   ```
   or
   ```html
   <script src="jquery-trunc.min.js"></script>
   ```
4. Call trunc(yourCharactersLimit):
   ```html javascript
   <div class="getting-started">Text</div>
   <script>
     $(function () {
       $('.getting-started').trunc(2);
     });
   </script>
   ```

### Example
My small example [here](https://annahavryliuk.github.io/jquery-trunc/).