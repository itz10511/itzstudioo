/* ═══════════════════════════════════════
   iTZ.STUDiOO — projects.js
   All project data for the work page grid + lightbox
   ═══════════════════════════════════════ */

const CDN   = (p) => `https://res.cloudinary.com/dwd3kelch/image/upload/${p}`;
const VID   = (p) => `https://res.cloudinary.com/dwd3kelch/video/upload/${p}`;
const img   = (p) => ({ type: 'img',   src: CDN(p) });
const vimeo = (id, orient) => ({ type: 'vimeo', id: String(id), orient: orient || 'v' });
const vimeoH = (id) => vimeo(id, 'h'); // horizontal shorthand
const mp4   = (p) => ({ type: 'video', src: VID(p) });
const mc    = (item) => ({ ...item, multicam: true }); // multicam marker

window.PROJECTS = [

  // 1 ─────────────────────────────────────
  {
    id: 'beatport-la',
    name: 'Beatport LA',
    category: ['photo', 'film', 'video'],
    year: 2026,
    cover: CDN('v1773630577/DSC07176_mxwwgi.jpg'),
    items: [
      vimeo(1173873417),
      vimeo(1173873368),
      vimeo(1173873408),
      vimeo(1173873355),
      vimeo(1173873719),
      vimeo(1173873689),
      vimeo(1173873601),
      img('v1773630578/DSC07103_lpic2p.jpg'),
      img('v1773630577/DSC07176_mxwwgi.jpg'),
      img('v1773630576/DSC07145_yjp8xk.jpg'),
      img('v1773630575/DSC07209_pwevdt.jpg'),
      img('v1773630574/DSC07216_oh7ffb.jpg'),
      img('v1773630233/DSC06881_aowrm4.jpg'),
      img('v1773630231/DSC06898_vhje4g.jpg'),
      img('v1773630230/DSC06837_ozi8qr.jpg'),
      img('v1773630229/DSC06789_zlnwpj.jpg'),
      img('v1773634540/IMG_1876_2_ki1xke.jpg'),
      img('v1773634534/IMG_1911_b0fd20.jpg'),
      img('v1773634532/IMG_1891_2_lm3bh6.jpg'),
      img('v1773634530/IMG_1894_o3pql3.jpg'),
      img('v1773634528/IMG_1897_l7fmer.jpg'),
      img('v1773634526/IMG_1889_uj26qs.jpg'),
      img('v1773634524/IMG_1898_2_gxvd7l.jpg'),
      img('v1773634521/IMG_1885_iwtfxt.jpg'),
      img('a_-90/v1773634519/IMG_1905_2_p4yejn.jpg'),
      img('v1773634515/IMG_1913_mrmkip.jpg'),
      img('v1773634128/IMG_1889_zwotaj.jpg'),
      img('v1773634017/IMG_1898_2_jsequl.jpg'),
    ],
  },

  // 2 ─────────────────────────────────────
  {
    id: 'seismic-2025',
    name: 'Seismic Dance Event 2025',
    category: ['photo', 'film', 'video'],
    year: 2025,
    cover: CDN('v1773633502/funkyy_qxi3n8.jpg'),
    items: [
      img('v1773633505/mochakk3_p46cmx.jpg'),
      img('v1773633503/crowd1_kjc89c.jpg'),
      img('v1773633502/funkyy_qxi3n8.jpg'),
      img('v1773633500/funk1_vh29g5.jpg'),
      img('v1773633499/mochakk2_hwm3xm.jpg'),
      img('v1773633497/mochakk_ma4u3q.jpg'),
      img('v1773633496/funk2_r71vbk.jpg'),
      img('v1773633632/IMG_6294_d8qndo.jpg'),
      img('a_90/v1773633630/IMG_6219_w8treq.jpg'),
      img('v1773633629/IMG_6274_cisz5t.jpg'),
      img('v1773633627/IMG_6220_zhb9ha.jpg'),
      img('v1773633625/IMG_6224_z9rkel.jpg'),
      img('v1773633624/IMG_6285_zkbtxa.jpg'),
      img('v1773633606/IMG_6292_nspf7m.jpg'),
      img('v1773633602/IMG_6261_wspbfp.jpg'),
      img('v1773633601/IMG_6218_qarhhd.jpg'),
      vimeoH(1173886007),
      vimeoH(1173885835),
      vimeoH(1173885704),
      vimeoH(1173885924),
      vimeoH(1173885593),
    ],
  },

  // 3 ─────────────────────────────────────
  {
    id: 'countdown-nye-2026',
    name: 'Countdown NYE 2026',
    category: ['film', 'video'],
    year: 2026,
    cover: CDN('v1773646691/1773646606071_cs253_tsjoki.jpg'),
    items: [
      img('v1773646691/1773646606071_cs253_tsjoki.jpg'),
      vimeoH(1173874341),
      vimeoH(1173874616),
      vimeo(1173874268),
      vimeoH(1173874167),
      vimeo(1173874129),
      img('v1773636173/IMG_9233_pygfni.jpg'),
      img('a_90/v1773636173/IMG_9219_bwyn9m.jpg'),
      img('v1773636173/IMG_9206_jppjfd.jpg'),
      img('a_90/v1773636173/IMG_9204_gvuzad.jpg'),
    ],
  },

  // 4 ─────────────────────────────────────
  {
    id: 'dion-work-la',
    name: 'DIØN @ WORK LA',
    category: ['photo', 'video'],
    year: 2026,
    cover: CDN('v1773630222/DSC01096_scgnpu.jpg'),
    items: [
      vimeo(1173874014),
      vimeo(1173874092),
      vimeo(1173873825),
      vimeo(1173873972),
      vimeo(1173873919),
      vimeo(1173873788),
      vimeo(1173873939),
      vimeo(1173873885),
      img('v1773630222/DSC01096_scgnpu.jpg'),
      img('v1773630221/DSC01516_dfqye6.jpg'),
      img('v1773630219/DSC01320_fvilnt.jpg'),
      img('v1773630218/DSC01514_tetiua.jpg'),
      img('v1773630217/DSC01039_rlnp7g.jpg'),
      img('v1773630216/DSC01520_v09fcc.jpg'),
      img('v1773630214/DSC01578_ef6svr.jpg'),
      img('v1773630213/DSC01546_dktefl.jpg'),
    ],
  },

  // 5 ─────────────────────────────────────
  {
    id: 'elliot-liam-sound',
    name: 'Elliot Schooling & Liam Palmer @ Sound LA',
    category: ['photo', 'video'],
    year: 2025,
    cover: CDN('v1773633467/DSC06074_exwvvh.jpg'),
    items: [
      vimeo(1173885497),
      vimeo(1173885477),
      mp4('v1773633475/chrisZoremix_hlcbqv.mp4'),
      img('v1773633472/DSC07061_t1fkpg.jpg'),
      img('v1773633470/DSC06641_n01mq4.jpg'),
      img('v1773633469/DSC06833_ixwpgo.jpg'),
      img('v1773633467/DSC06074_exwvvh.jpg'),
    ],
  },

  // 6 ─────────────────────────────────────
  {
    id: 'ranger-trucco',
    name: 'Ranger Trucco @ Avalon LA',
    category: ['photo'],
    year: 2025,
    cover: CDN('v1773633456/DSC00161_srsn5r.jpg'),
    items: [
      img('v1773633465/DSC08900_bx5bez.jpg'),
      img('v1773633462/IMG_7879_sav5kk.jpg'),
      img('v1773633460/DSC09614_mkoovr.jpg'),
      img('v1773633459/DSC00259_gqbh7j.jpg'),
      img('v1773633458/DSC09348_b7oovx.jpg'),
      img('v1773633456/DSC00161_srsn5r.jpg'),
      img('v1773633455/DSC00305_fsclhh.jpg'),
      img('v1773633453/DSC09923_bnv4yy.jpg'),
      img('v1773633452/DSC09771_pe0pwj.jpg'),
    ],
  },

  // 7 ─────────────────────────────────────
  {
    id: 'ian-asher',
    name: 'Ian Asher @ Academy LA & NOVA SD',
    category: ['photo', 'film'],
    year: 2026,
    cover: CDN('v1773630209/DSC03309_gknta0.jpg'),
    items: [
      img('v1773630210/DSC03597_s3rcqy.jpg'),
      img('v1773630209/DSC03309_gknta0.jpg'),
      img('v1773630207/DSC04319_fwwi7p.jpg'),
      img('v1773630206/DSC03603_tvbmlz.jpg'),
      img('v1773634668/IMG_2595_cbhbec.jpg'),
      img('a_90/v1773634666/IMG_2596_rflh4k.jpg'),
      img('v1773634664/IMG_2631_wpfm8m.jpg'),
      img('v1773634662/IMG_2629_webz7u.jpg'),
      img('v1773634660/IMG_2626_yj9whj.jpg'),
      img('a_90/v1773634657/IMG_2569_engvpv.jpg'),
      img('v1773634655/IMG_2572_gafotp.jpg'),
      img('v1773634653/IMG_2610_v9tae4.jpg'),
      img('v1773634651/IMG_2580_etu2g4.jpg'),
      img('a_-90/v1773634648/IMG_2565_z5vmnr.jpg'),
      img('v1773634646/IMG_2633_xvmvwh.jpg'),
      img('v1773634644/IMG_2570_s4ri4z.jpg'),
      img('v1773634642/IMG_2604_bd9xiq.jpg'),
      img('v1773634639/IMG_2574_osvgnb.jpg'),
      img('v1773634638/IMG_2628_pjgo10.jpg'),
      img('v1773634635/IMG_2603_d3yqvf.jpg'),
      img('v1773634633/IMG_2598_qb3jth.jpg'),
      img('v1773634631/IMG_2600_ftw3i4.jpg'),
    ],
  },

];

/* ═══════════════════════════════════════
   Full gallery for Pictures / Film Photos / Video tabs
   ═══════════════════════════════════════ */
window.GALLERY = {

  photo: [
    // ── EDM WAVE 1 ─────────────────────────
    img('v1773633502/funkyy_qxi3n8.jpg'),       // Seismic
    img('v1773630577/DSC07176_mxwwgi.jpg'),      // Beatport — Beltran
    img('v1773633467/DSC06074_exwvvh.jpg'),      // Elliot & Liam
    img('v1773633483/DSC02673_gug2qs.jpg'),      // NEW
    img('v1773633456/DSC00161_srsn5r.jpg'),      // Ranger Trucco
    img('v1773630209/DSC03309_gknta0.jpg'),      // Ian Asher
    img('v1773630222/DSC01096_scgnpu.jpg'),      // DIØN
    // ── EDM WAVE 2 ─────────────────────────
    img('v1773633503/crowd1_kjc89c.jpg'),        // Seismic
    img('v1773630233/DSC06881_aowrm4.jpg'),      // Beatport — Cole
    img('v1773633472/DSC07061_t1fkpg.jpg'),      // Elliot & Liam
    img('v1773633493/DSC03827_wallba.png'),      // NEW
    img('v1773633462/IMG_7879_sav5kk.jpg'),      // Ranger Trucco
    img('v1773630210/DSC03597_s3rcqy.jpg'),      // Ian Asher
    img('v1773630219/DSC01320_fvilnt.jpg'),      // DIØN
    // ── EDM WAVE 3 ─────────────────────────
    img('v1773633505/mochakk3_p46cmx.jpg'),      // Seismic
    img('v1773630578/DSC07103_lpic2p.jpg'),      // Beatport — Beltran
    img('v1773633470/DSC06641_n01mq4.jpg'),      // Elliot & Liam
    img('v1773633491/DSC08029_e6sq37.jpg'),      // NEW
    img('v1773633460/DSC09614_mkoovr.jpg'),      // Ranger Trucco
    img('v1773630207/DSC04319_fwwi7p.jpg'),      // Ian Asher
    img('v1773630218/DSC01514_tetiua.jpg'),      // DIØN
    // ── EDM WAVE 4 ─────────────────────────
    img('v1773633500/funk1_vh29g5.jpg'),         // Seismic
    img('v1773630231/DSC06898_vhje4g.jpg'),      // Beatport — Cole
    img('v1773633469/DSC06833_ixwpgo.jpg'),      // Elliot & Liam
    img('v1773633459/DSC00259_gqbh7j.jpg'),      // Ranger Trucco
    img('v1773630206/DSC03603_tvbmlz.jpg'),      // Ian Asher
    img('v1773630217/DSC01039_rlnp7g.jpg'),      // DIØN
    // ── EDM WAVE 5 ─────────────────────────
    img('v1773633499/mochakk2_hwm3xm.jpg'),      // Seismic
    img('v1773630576/DSC07145_yjp8xk.jpg'),      // Beatport — Beltran
    img('v1773633458/DSC09348_b7oovx.jpg'),      // Ranger Trucco
    img('v1773630216/DSC01520_v09fcc.jpg'),      // DIØN
    // ── EDM WAVE 6 ─────────────────────────
    img('v1773633497/mochakk_ma4u3q.jpg'),       // Seismic
    img('v1773630230/DSC06837_ozi8qr.jpg'),      // Beatport — Cole
    img('v1773633455/DSC00305_fsclhh.jpg'),      // Ranger Trucco
    // ── EDM WAVE 7 ─────────────────────────
    img('v1773633496/funk2_r71vbk.jpg'),         // Seismic
    img('v1773630575/DSC07209_pwevdt.jpg'),      // Beatport — Beltran
    img('v1773633453/DSC09923_bnv4yy.jpg'),      // Ranger Trucco
    img('v1773630229/DSC06789_zlnwpj.jpg'),      // Beatport — Cole
    img('v1773630574/DSC07216_oh7ffb.jpg'),      // Beatport — Beltran
    img('v1773633452/DSC09771_pe0pwj.jpg'),      // Ranger Trucco
  ],

  film: [
    // Seismic Dance Event 2025
    img('v1773633632/IMG_6294_d8qndo.jpg'),
    img('a_90/v1773633630/IMG_6219_w8treq.jpg'),
    img('v1773633629/IMG_6274_cisz5t.jpg'),
    img('v1773633627/IMG_6220_zhb9ha.jpg'),
    img('v1773633625/IMG_6224_z9rkel.jpg'),
    img('v1773633624/IMG_6285_zkbtxa.jpg'),
    img('v1773633606/IMG_6292_nspf7m.jpg'),
    img('v1773633602/IMG_6261_wspbfp.jpg'),
    img('v1773633601/IMG_6218_qarhhd.jpg'),
    // Countdown NYE 2026
    img('v1773636173/IMG_9233_pygfni.jpg'),
    img('a_90/v1773636173/IMG_9219_bwyn9m.jpg'),
    img('v1773636173/IMG_9206_jppjfd.jpg'),
    img('a_90/v1773636173/IMG_9204_gvuzad.jpg'),
    // Ian Asher @ Academy LA & NOVA SD
    img('v1773634668/IMG_2595_cbhbec.jpg'),
    img('v1773634664/IMG_2631_wpfm8m.jpg'),
    img('v1773634662/IMG_2629_webz7u.jpg'),
    img('v1773634660/IMG_2626_yj9whj.jpg'),
    img('v1773634655/IMG_2572_gafotp.jpg'),
    img('v1773634653/IMG_2610_v9tae4.jpg'),
    img('v1773634651/IMG_2580_etu2g4.jpg'),
    img('a_-90/v1773634648/IMG_2565_z5vmnr.jpg'),
    img('v1773634646/IMG_2633_xvmvwh.jpg'),
    img('v1773634644/IMG_2570_s4ri4z.jpg'),
    img('v1773634642/IMG_2604_bd9xiq.jpg'),
    img('v1773634639/IMG_2574_osvgnb.jpg'),
    img('v1773634638/IMG_2628_pjgo10.jpg'),
    img('v1773634635/IMG_2603_d3yqvf.jpg'),
    img('v1773634633/IMG_2598_qb3jth.jpg'),
    img('v1773634631/IMG_2600_ftw3i4.jpg'),
    // Beatport LA BTS
    img('v1773634540/IMG_1876_2_ki1xke.jpg'),
    img('v1773634534/IMG_1911_b0fd20.jpg'),
    img('v1773634532/IMG_1891_2_lm3bh6.jpg'),
    img('v1773634530/IMG_1894_o3pql3.jpg'),
    img('v1773634528/IMG_1897_l7fmer.jpg'),
    img('v1773634526/IMG_1889_uj26qs.jpg'),
    img('v1773634524/IMG_1898_2_gxvd7l.jpg'),
    img('v1773634521/IMG_1885_iwtfxt.jpg'),
    img('a_-90/v1773634519/IMG_1905_2_p4yejn.jpg'),
    img('v1773634515/IMG_1913_mrmkip.jpg'),
    img('v1773634128/IMG_1889_zwotaj.jpg'),
    img('v1773634017/IMG_1898_2_jsequl.jpg'),
  ],

  video: [
    // ── MULTICAM ───────────────────────────
    // Seismic Dance Event 2025
    mc(vimeoH(1173886007)),
    mc(vimeoH(1173885835)),
    mc(vimeoH(1173885704)),
    mc(vimeoH(1173885924)),
    mc(vimeoH(1173885593)),
    // Countdown NYE 2026
    mc(vimeoH(1173874341)),
    mc(vimeoH(1173874616)),
    mc(vimeo(1173874268)),
    mc(vimeoH(1173874167)),
    mc(vimeo(1173874129)),
    // ── SINGLE CAM ─────────────────────────
    // Beatport LA — Beltran
    vimeo(1173873417),
    vimeo(1173873368),
    vimeo(1173873408),
    vimeo(1173873355),
    // Beatport LA — Cole
    vimeo(1173873719),
    vimeo(1173873689),
    vimeo(1173873601),
    // DIØN @ WORK LA
    vimeo(1173874014),
    vimeo(1173874092),
    vimeo(1173873825),
    vimeo(1173873972),
    vimeo(1173873919),
    vimeo(1173873788),
    vimeo(1173873939),
    vimeo(1173873885),
    // Elliot & Liam
    vimeo(1173885497),
    vimeo(1173885477),
    mp4('v1773633475/chrisZoremix_hlcbqv.mp4'),
  ],

};
