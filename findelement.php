<?php 
    $angka = 4;
    $angka_arr = range($angka, 1);
?>
<script type="text/javascript">
    function findSums(arr, target, count) {
        var result = [];
        function recurse(start, leftOver, selection) {
            if (leftOver < 0) return; // failure
            if (leftOver === 0 && selection.length == count) {
                result.push(selection); // add solution
                return;
            }
            for (var i = start; i < arr.length; i++) {
                recurse(i, leftOver-arr[i], selection.concat(arr[i]));
            }
        }
        recurse(0, target, []);
        return result;
    }

var angka = <?php echo $angka; ?>;
var angka_arr = <?php echo json_encode($angka_arr); ?>;
var length = angka + 1;

for (var i = 1; i < length; i++) {
    var result = findSums(angka_arr, angka, i);
    // console.log(result);
    result.forEach(function(value) {
        // console.log(value);
        document.write(value+'<br>');
    });
    
}

</script>
<?php ?>