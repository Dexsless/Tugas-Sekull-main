import express from "express";

const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:agama/:alamat/:telepon/:email/:hobi/:cita/:kata',(req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita;
    var kata_kata = req.params.kata;
    res.send(
        'Nama : ' + nama + '<br>'+
        'tempat lahir : ' + tempat_lahir + '<br>'+
        'tanggal lahir : ' + tanggal_lahir + '<br>'+
        'agama : ' + agama + '<br>'+
        'alamat : ' + alamat + '<br>'+
        'telepon : ' + telepon + '<br>'+
        'email : ' + email + '<br>'+
        'hobi : ' + hobi + '<br>'+
        'cita cita : ' + cita_cita + '<br>'+
        'Kata Kata : ' + kata_kata
    )
});
router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;
    var bilangan3 = 15
    var bilangan4 = 10
    var kurang = bilangan3 - bilangan4
    var bilangan5 = 8
    var bilangan6 = 10
    var kali = bilangan5 * bilangan6
    var bilangan7 = 90
    var bilangan8 = 9
    var bagi = bilangan7 / bilangan8

    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<br>'+

        '<h3>Pengurangan</h3>'+
        'Bilangan ke 1 : ' + bilangan3 + '<br>'+
        'Bilangan ke 2 : ' + bilangan4 + '<br>' +
        "Hasil : " + kurang + '<br>'+

        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan5 + '<br>' +
        'Bilangan ke 2 : ' + bilangan6 + '<br>' +
        'Hasil : ' + kali +'<br>' +

        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan7 + '<br>' +
        'Bilangan ke 2 : ' + bilangan8 + '<br>' +
        'Hasil : ' + bagi
    )
})
router.get('/bangun_datar', (req,res) => {
    var sisipersegi = 10
    var hasilpersegi = sisipersegi * sisipersegi
    var panjangpersegipanjang = 10
    var lebarpersegipanjang = 5
    var hasilpersegipanjang = panjangpersegipanjang * lebarpersegipanjang
    var alassegitiga = 20
    var tinggisegitiga = 15
    var hasilsegitiga = alassegitiga * tinggisegitiga / 2
    var jarijarilingkaran = 10
    var hasillingkaran = jarijarilingkaran * jarijarilingkaran * 3.14

    res.send(
        '<h3>Persegi</h3>' +
        'Sisi Persegi : ' + sisipersegi +'<br>' +
        'Hasil : ' + hasilpersegi +
    
        '<h3>Persegi Panjang</h3>' +
        'Panjang Persegi Panjang : ' + panjangpersegipanjang + '<br>' +
        'Lebar Persegi Panjang : ' + lebarpersegipanjang + '<br>' +
        'Hasil : ' + hasilpersegipanjang +
    
        '<h3>Segitiga</h3>' +
        'Alas Segitiga : ' + alassegitiga + '<br>' +
        'Tinggi Segitiga : ' + tinggisegitiga + '<br>' +
        'Hasil : ' + hasilsegitiga +
    
        '<h3>Lingkaran</h3>' +
        'Jari Jari Lingkaran : ' + jarijarilingkaran + '<br>' +
        'Hasil Lingkaran : ' + hasillingkaran + '<br>'
    )
})

router.get('/tes/:nama/:kelas/:pts/:pas', (req,res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
    var rapot = (pts + pas) / 2;
    if(rapot >= 90 && rapot <= 100) {
        var grade = 'Grade A'
    }
    else if(rapot >= 80 && rapot < 90) {
        var grade = 'Grade B'
    }
    else if(rapot >= 70 && rapot < 80) {
        var grade = 'Grade C'
    }
    else if(rapot >= 60 && rapot < 70) {
        var grade = 'Grade D'
    }
    else if(rapot >= 50 && rapot < 60) {
        var grade = 'Grade E'
    }
    else if(rapot >= 0 && rapot < 50) {
        var grade = 'Belajar Lagi Deck'
    }
    else {
        var grade = 'Asupkeun nu bener'
    }

    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + kelas + '<br>' +
        'Nilai PTS : ' + pts + '<br>' +
        'Nilai PAS : ' + pas + '<br>' +
        'Nilai Rapot : ' + rapot + '<br>' +
        'Keterangan : ' + grade + '<br>'
    )
})

router.get('/bersarang/:nama/:jurusan/:kelas',(req, res) => {
    var nama = req.params.nama
    var jurusan = req.params.jurusan
    var kelas = req.params.kelas

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = 'Anda Kelas 10 RPL'
        } else if (kelas == '11 RPL') {
            var ket = 'Anda Kelas 11 RPL'
        } else if (kelas == '12 RPL') {
            var ket = 'Anda Kelas 12 RPL'
        } else {
            var ket = 'Kelas Yang Anda Masukan Salah'
        }
    }else if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = 'Anda Kelas 10 TKRO'
        } else if (kelas == '11 TKRO') {
            var ket = 'Anda Kelas 11 TKRO'
        } else if (kelas == '12 TKRO') {
            var ket = 'Anda Kelas 12 TKRO'
        } else {
            var ket = 'kelas yang anda masukan salah'
        }
    }else if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = 'Anda Kelas 10 TBSM'
        }
        else if (kelas == '11 TBSM') {
            var ket = 'Anda Kelas 11 TBSM'
        }
        else if (kelas == '12 TBSM') {
            var ket = 'Anda Kelas 12 TBSM'
        }
        else{
            var ket = 'Kelas Yang Anda Masukan Salah'
        }
    }else {
        var ket = "Jurusan Tidak Tersedia"
    }
    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + jurusan + '<br>' +
        'Kelas : ' + ket + '<br>'
    )
});
router.get('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah',(req, res) => {
    var nama = req.params.nama
    var tanggal = req.params.tanggal
    var jenis = req.params.jenis
    var pesanan = req.params.pesanan
    if (jenis == 'Makanan') {
        if (pesanan == 'Nasi Goreng') {
            var harga = 20000;
        } else if (pesanan == 'Mie Goreng') {
            var harga = 30000;
        } else if (pesanan == 'Ayam Goreng') {
            var harga = 40000;
        } else {
            var harga = 'Tidak ada dalam Menu'
        }
    } else if (jenis == 'Minuman') {
        if (pesanan == 'Air Mineral') {
            var harga = 10000;
        } else if (pesanan == 'Jus') {
            var harga = 20000;
        } else if (pesanan == 'Kopi') {
            var harga = 30000;
        } else {
            var harga = 'Tidak ada dalam Menu'
        }
    } else {
        var pesanan = 'Masukan data yang Benar'
    }
    var jumlah = req.params.jumlah
    var total = jumlah * harga
    if (total >= 100000) {
        var diskon = total * 0.5
    } else {
        var diskon = 0
    }
    var totalbayar = total - diskon

    res.send(
        '<center>Starbucks Lokal' + '<br>' +
        'Nama : ' + nama + '<br>' +
        'Tanggal : ' + tanggal + '<br>' +
        'Jenis : ' + jenis + '<br>' +
        'Pesanan : ' + pesanan + '<br>' +
        'Harga : ' + harga + '<br>' +
        'Jumlah : ' + jumlah + '<br>' +
        '-----------------------------<br>' +
        'Total : ' + total + '<br>' +
        'Diskon 50% : ' + diskon + '<br>' +
        'Total Pembayaran : ' + totalbayar + '<br>' +
        '-----------------------------<br>' +
        '<br>>>>>>>Terima Kasih<<<<<<center </center>'
    )
});

export default router;