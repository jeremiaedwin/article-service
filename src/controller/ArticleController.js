const path = require('path');
const fs = require('fs');

async function edit(req, res) {
  try {
    if (req.files.cover_artikel != null) {
      // TODO File Upload
      const coverPath = 'public/image/';
      const newFile = req.files.cover_artikel;
      const existedPath = coverPath + res.artikel.cover_artikel;
      const newFileName = res.artikel.id_artikel + path.extname(newFile);
    }
    if (req.body.judul_artikel != null) {
      res.artikel.juduL_artikel = req.body.judul_artikel;
    }
    if (req.body.isi_artikel != null) {
      res.artikel.isi_artikel = req.body.isi_artikel;
    }
    if (req.body.deskripsi_artikel != null) {
      res.artikel.deskripsi_artikel = req.body.deskripsi_artikel;
    }
    if (req.body.tag_artikel != null) {
      res.artikel.tag_artikel = req.body.tag_artikel;
    }
    const updatedData = await res.artikel.save();
    res.status(200).send(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message, status: 'Error' });
  }
}

module.exports = {
  edit,
};
