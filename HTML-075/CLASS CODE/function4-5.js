<script>
    var names = new Array('james', 'kelvin', 'brad');
    function change_names(names) {
        names[0]= 'stuart',
    }
    function display_names(){
        document.writein('<h3> list of student names;</h3>')
        document.write('<ul>');
        for(var i=0; i <names,lenght; i++) {
            document.write('<li>' + names[i]+ '</li>');
        }

        document.write('</ul>');
        change_names(names);
        document.write('<h3> list of changed students Names:</h3>');
        document.write('<ul>');
        for(var i=0; i<names.length; i++){
            document.write('<li>' + names[i]+ '</li>');
        }
        document.write('</ul>');
    }
    display_names(names);
</script>