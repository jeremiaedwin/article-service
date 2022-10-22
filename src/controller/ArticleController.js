async function edit(req, res) {
  if (req.body.kategori != null) res.sim.kategori = req.body.kategori;
  if (req.files.cover != null) {
    const PathFile = '/media/';
    res.sim.cover = PathFile;
  }
  if (req.body.judul != null) res.sim.judul = req.body.judul;
  if (req.body.isi != null) res.sim.isi = req.body.isi;
  if (req.body.deksripsi != null) res.sim.deksripsi = req.body.deksripsi;
  if (req.body.tag != null) res.sim.tag = req.body.tag;
}

module.exports = {
  edit,
};
