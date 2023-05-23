<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-Edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    
    <!--datatables-->
    <link href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <title>Document</title>
</head>

<body>
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>ID Paket</th>
                <th>Nama Petugas Pengemasan</th>
                <th>Tanggal Pengemasan</th>
                <th>Berat Saat Pengemasan (Ons)</th>
                <th>Ubah</th>
                <th>Hapus</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $conn = mysqli_connect("localhost","root","","sisteh");
            $q = mysqli_query($conn,"SELECT * FROM data_pengemasan");
            $no = 0;
            while($data = mysqli_fetch_array($q)){
                $no++;
                ?>
                <tr>
                    <td><?= $no?></td>
                    <td><?= $data['ID_Paket']?></td>
                    <td><?= $data['Petugas_Pengemasan']?></td>
                    <td><?= $data['Tanggal_Pengemasan']?></td>
                    <td><?= $data['Berat_Pengemasan']?></td>
                    <td>Ubah</td>
                    <td>Hapus<td>
                </tr>
                <?php } ?>
        </tbody>
    </table>
    <script>
        $(document).ready(function () {
        $('#example').DataTable();
    });
    </script>
</html>