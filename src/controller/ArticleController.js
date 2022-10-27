const path = require('path');
const fs = require('fs').promises;
const Article = require('../models/artikel');

async function update(req, res) {
  try {
    if (req.files) {
      const coverPath = 'public/images/cover/';
      const newFile = req.files.cover_artikel;
      // Delete Existed Cover Image
      if (res.artikel.cover_artikel && res.artikel.cover_artikel !== '') {
        try {
          const existedPath = coverPath + res.artikel.cover_artikel;
          await fs.unlink(existedPath);
        } catch (err) {
          return res.status(404).send({ message: err.message });
        }
      }
      // Check cover extension
      const allowedExtension = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG'];
      const extensionName = path.extname(newFile.name);
      if (!allowedExtension.includes(extensionName)) {
        return res.status(415).send({ message: "Extension file doesn't allowed" });
      }
      // Upload File
      try {
        const newFileName = res.artikel.id_artikel + extensionName;
        const newFilePath = coverPath + newFileName;
        newFile.mv(newFilePath);
        res.artikel.cover_artikel = newFileName;
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
    }
    if (req.body.id_kategori != null) {
      res.artikel.id_kategori = req.body.id_kategori;
    }
    if (req.body.status_artikel != null) {
      res.artikel.status_artikel = req.body.status_artikel;
    }
    if (req.body.akses_baca != null) {
      res.artikel.akses_baca = req.body.akses_baca;
    }
    if (req.body.akses_komentar != null) {
      res.artikel.akses_komentar = req.body.akses_komentar;
    }
    if (req.body.id_tag != null) {
      res.artikel.id_tag = req.body.id_tag;
    }
    if (req.body.judul_artikel != null) {
      res.artikel.judul_artikel = req.body.judul_artikel;
    }
    if (req.body.deskripsi_artikel != null) {
      res.artikel.deskripsi_artikel = req.body.deskripsi_artikel;
    }
    if (req.body.isi_artikel != null) {
      res.artikel.isi_artikel = req.body.isi_artikel;
    }
    if (req.body.catatan_editor != null) {
      res.artikel.catatan_editor = req.body.catatan_editor;
    }
    if (req.body.waktu_draft != null) {
      res.artikel.waktu_draft = req.body.waktu_draft;
    }
    if (req.body.waktu_publish != null) {
      res.artikel.waktu_publish = req.body.waktu_publish;
    }
    if (req.body.waktu_arsip != null) {
      res.artikel.waktu_arsip = req.body.waktu_arsip;
    }
    if (req.body.waktu_terbit != null) {
      res.artikel.waktu_terbit = req.body.waktu_terbit;
    }
    if (req.body.waktu_selesai != null) {
      res.artikel.waktu_selesai = req.body.waktu_selesai;
    }
    const updatedData = await res.artikel.save();
    return res.status(200).send(updatedData);
  } catch (err) {
    return res.status(400).json({ message: err.message, status: 'Error' });
  }
}

async function GetArticleDraft(req, res) {
  let dataArticle;
  let userId;
  try {
    userId = 'USR0000000003';
    dataArticle = await Article.find({ id_status_artikel: 1, id_user: userId });
    if (dataArticle[0] == null) {
      return res.json({
        status: 'Error',
        message: 'Article not found',
      }, 404);
    }
    return res.json({
      status: 'success',
      data: dataArticle,
    });
  } catch (error) {
    return res.json({
      status: 'Error',
      message: 'Failed to get Data',
    }, 500);
  }
}

async function GetArticleDraftbyId(req, res) {
  let dataArticle;
  try {
    dataArticle = await Article.findOne({ id_artikel: req.params.id });
    if (dataArticle == null) {
      return res.json({
        status: 'Error',
        message: 'Article not found',
      }, 404);
    }
    return res.json({
      status: 'success',
      data: dataArticle,
    }, 200);
  } catch (error) {
    return res.json({
      status: 'Error',
      message: 'Failed to get Data',
    }, 500);
  }
}

module.exports = {
  update,
  GetArticleDraft,
  GetArticleDraftbyId,
};
