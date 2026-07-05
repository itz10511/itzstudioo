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
      img('a_-90/v1773634540/IMG_1876_2_ki1xke.jpg'),
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




  {
    id: 'benwal-corela-2026',
    name: 'Core LA 2026',
    category: ['photo', 'video'],
    year: 2026,
    cover: CDN('v1783215637/DSC04010_v0qrbs.jpg'),
    items: [
      vimeoH(1207075700),
      vimeoH(1207075469),
      vimeoH(1207075470),
      vimeoH(1207075471),
      vimeoH(1207075472),
      img('v1783215637/DSC04010_v0qrbs.jpg'),
      img('v1783215634/DSC03931_qtvniz.jpg'),
      img('v1783215632/DSC03886_jxyc3j.jpg'),
      img('v1783215630/DSC03884_eo4yve.jpg'),
      img('v1783215628/DSC03883_ze1v35.jpg'),
      img('v1783215626/DSC03808_u1bhpe.jpg'),
      img('v1783215624/DSC03787_buzi6v.jpg'),
      img('v1783215622/DSC03769_rlfub8.jpg'),
      img('v1783215620/DSC03765_nsh3ti.jpg'),
      img('v1783215617/DSC03716_vwhk7w.jpg'),
      img('v1783215615/DSC03687_bytzma.jpg'),
      img('v1783215612/DSC03676_jf0opp.jpg'),
      img('v1783215611/DSC03672_cbrkps.jpg'),
      img('v1783215609/DSC03645_evxho8.jpg'),
    ],
  },




  {
    id: 'lightning-in-a-bottle',
    name: 'Lightning in a Bottle 2026',
    category: ['photo'],
    year: 2026,
    cover: CDN('v1783215425/LIB2026_0523_144344-_07818__ivilla.11_m1o2i0.jpg'),
    items: [
      img('v1783215425/LIB2026_0523_144344-_07818__ivilla.11_m1o2i0.jpg'),
      img('v1783215424/LIB2026_0523_144115-_07787__ivilla.11_ttmhs9.jpg'),
      img('v1783215422/LIB2026_0523_143726-_07763__ivilla.11_gpysah.jpg'),
      img('v1783215420/LIB2026_0523_142653-_07701__ivilla.11_oekcaq.jpg'),
      img('v1783215418/LIB2026_0523_142302-_07639__ivilla.11_nwtxin.jpg'),
      img('v1783215417/LIB2026_0523_002340-_07501__ivilla.11_q34exw.jpg'),
      img('v1783215415/LIB2026_0523_000402-_07291__ivilla.11_g44l0i.jpg'),
      img('v1783215413/LIB2026_0522_222221-_07128__ivilla.11_pqvpwp.jpg'),
      img('v1783215413/LIB2026_0523_000359-_07284__ivilla.11_wvwjly.jpg'),
      img('v1783215409/LIB2026_0522_222102-_07071__ivilla.11_uw2jo4.jpg'),
      img('v1783215407/LIB2026_0522_222101-_07069__ivilla.11_spiyyh.jpg'),
      img('v1783215406/LIB2026_0522_222044-_07061__ivilla.11_bns576.jpg'),
      img('v1783215404/LIB2026_0522_221626-_07003__ivilla.11_bxvmvv.jpg'),
      img('v1783215403/LIB2026_0522_221520-_06988__ivilla.11_we9v9t.jpg'),
      img('v1783215401/LIB2026_0522_221426-_06964__ivilla.11_mjrdjh.jpg'),
      img('v1783215399/LIB2026_0522_210308-_06687__ivilla.11_avbeci.jpg'),
      img('v1783215396/LIB2026_0522_210159-_06653__ivilla.11_zxetoj.jpg'),
      img('v1783215395/LIB2026_0522_210140-_06645__ivilla.11_ch9wi3.jpg'),
      img('v1783215392/LIB2026_0521_000644-_06531__ivilla.11_vu9ktv.jpg'),
      img('v1783215390/LIB2026_0520_232146-_06394__ivilla.11_jcmdfv.jpg'),
      img('v1783215388/LIB2026_0520_231605-_06377__ivilla.11_udt9ip.jpg'),
      img('v1783215386/LIB2026_0520_231443-_06369__ivilla.11_gjztzj.jpg'),
      img('v1783215385/LIB2026_0520_230250-_06332__ivilla.11_l2mgnu.jpg'),
      img('v1783215383/LIB2026_0520_230121-_06307__ivilla.11_agjzcn.jpg'),
      img('v1783215382/LIB2026_0520_231532-_06372__ivilla.11_cg16g0.jpg'),
    ],
  },




  {
    id: 'edc-las-vegas-2026',
    name: 'EDC Las Vegas 2026',
    category: ['photo', 'video'],
    year: 2026,
    cover: CDN('v1783215570/DSC04794_cwpp6g.jpg'),
    items: [
      vimeo(1207075101),
      vimeo(1207074535),
      vimeo(1207074436),
      vimeo(1207074435),
      vimeo(1207074437),
      vimeo(1207074438),
      img('v1783215570/DSC04794_cwpp6g.jpg'),
      img('v1783215569/DSC04786_sdot5c.jpg'),
      img('v1783215566/DSC04738_ooegyi.jpg'),
      img('v1783215564/DSC04655_jc9toj.jpg'),
      img('v1783215562/DSC04621_agxwby.jpg'),
      img('v1783215560/DSC04514_e5qrod.jpg'),
      img('v1783215559/DSC04435_uytr55.jpg'),
      img('v1783215557/DSC04373_g4bety.jpg'),
      img('v1783215555/DSC04332_lebxpg.jpg'),
      img('v1783215552/DSC04310_bavo1n.jpg'),
      img('v1783215551/DSC04071_bmmpzv.jpg'),
      img('v1783215549/DSC04041_pi8qsn.jpg'),
      img('v1783215546/DSC04038_vbqkrw.jpg'),
      img('v1783215544/DSC04036_gynvmm.jpg'),
      img('v1783215520/DSC06026_tbeatz.jpg'),
      img('v1783215517/DSC06008_foyec5.jpg'),
      img('v1783215516/DSC05759_tntsod.jpg'),
      img('v1783215514/DSC05701_ss8kec.jpg'),
      img('v1783215512/DSC05689_xvx4au.jpg'),
      img('v1783215510/DSC05673_fw72vp.jpg'),
      img('v1783215509/DSC05600_hi7r2h.jpg'),
      img('v1783215506/DSC05583_ydwz3e.jpg'),
      img('v1783215504/DSC05580_qputdd.jpg'),
      img('v1783215503/DSC05512_l72k3s.jpg'),
      img('v1783215500/DSC05429_nbmztt.jpg'),
      img('v1783215498/DSC05425_gbpzz6.jpg'),
      img('v1783215497/DSC05408_at3tgd.jpg'),
      img('v1783215494/DSC05368_cdgetq.jpg'),
      img('v1783215493/DSC05296_vyemwi.jpg'),
      img('v1783215491/DSC05272_iqhofn.jpg'),
      img('v1783215489/DSC05244_cork6p.jpg'),
      img('v1783215487/DSC05206_w49ky1.jpg'),
      img('v1783215485/DSC05192_chdd31.jpg'),
      img('v1783215483/DSC05182_iefgpk.jpg'),
      img('v1783215481/DSC05113_bntksr.jpg'),
      img('v1783215479/DSC05090_qrqxgs.jpg'),
      img('v1783215478/DSC05070_ozffyh.jpg'),
      img('v1783215475/DSC05053_adwlyr.jpg'),
      img('v1783215473/DSC05041_kx7on2.jpg'),
      img('v1783215472/DSC05123_r1hju1.jpg'),
    ],
  },




  {
    id: 'solid-grooves-mmw',
    name: 'Solid Grooves @ Space Miami',
    category: ['photo', 'film'],
    year: 2026,
    cover: CDN('v1783215110/IMG_5006_bva8i3.jpg'),
    items: [
      img('v1783215124/IMG_5349_dvxr3j.jpg'),
      img('v1783215124/IMG_4971_izhfyu.jpg'),
      img('v1783215124/IMG_5074_nbsinb.jpg'),
      img('v1783215124/IMG_5364_w5c9vx.jpg'),
      img('a_-90/v1783215121/IMG_5009_b1wad3.jpg'),
      img('v1783215121/IMG_5086_qo8eo8.jpg'),
      img('a_-90/v1783215121/IMG_5078_bsuh3b.jpg'),
      img('a_-90/v1783215118/IMG_5058_qcfms9.jpg'),
      img('v1783215117/IMG_5065_vjx6yn.jpg'),
      img('a_-90/v1783215117/IMG_5016_lddhhl.jpg'),
      img('v1783215117/IMG_5002_zl170j.jpg'),
      img('v1783215113/IMG_5024_slig9t.jpg'),
      img('a_-90/v1783215110/IMG_4997_wtazvl.jpg'),
      img('v1783215110/IMG_5006_bva8i3.jpg'),
      img('v1783215109/IMG_4994_yb4rhw.jpg'),
      img('v1783215105/IMG_5001_tuq2bb.jpg'),
      img('v1783215103/IMG_4991_ctwww0.jpg'),
      img('v1783215102/IMG_4979_ehp1pf.jpg'),
      img('a_90/v1783215101/IMG_4966_l63u40.jpg'),
      img('v1783215100/IMG_4958_wk004j.jpg'),
      img('v1783215097/IMG_4953_dtblwt.jpg'),
      img('v1783215055/DSC08767_yaqsrj.jpg'),
      img('v1783215054/DSC08758_c5eycx.jpg'),
      img('v1783215053/DSC08560_mvve6x.jpg'),
      img('v1783215052/DSC08511_wlkn67.jpg'),
      img('v1783215052/DSC08523_xggkma.jpg'),
      img('v1783215050/DSC08479_umjaiw.jpg'),
      img('v1783215050/DSC08452_gw43oj.jpg'),
      img('v1783215049/DSC08389_fl0u4y.jpg'),
      img('v1783215048/DSC08371_uxqnt9.jpg'),
      img('v1783215047/DSC08143_wsu3um.jpg'),
      img('v1783215047/DSC08155_o8bjeb.jpg'),
      img('v1783215046/DSC07994_gdvvio.jpg'),
      img('v1783215045/DSC07976_eu0lfm.jpg'),
      img('v1783215045/DSC08073_nowmml.jpg'),
      img('v1783215044/DSC07955_fietaj.jpg'),
    ],
  },




  // ── New uploads ─────────────────────────
  {
    id: 'collect-200',
    name: 'Collect 200 @ Spotlight LA',
    category: ['photo', 'film'],
    year: 2026,
    cover: CDN('v1783215789/000075260037_ewjlmy.jpg'),
    items: [
      img('v1783215789/000075260037_ewjlmy.jpg'),
      img('v1783215787/000075260033_pizd4w.jpg'),
      img('v1783215784/000075260032_axk6kl.jpg'),
      img('v1783215781/000075260017_fywlto.jpg'),
      img('v1783215779/000075260010_ocze39.jpg'),
      img('v1783215776/000075260008_pok80n.jpg'),
      img('a_180/v1783215774/000075260004_foekdn.jpg'),
      img('v1783215771/000075190025_izsqfn.jpg'),
      img('v1783215769/000075190009_fiabwy.jpg'),
      img('v1783215766/000075190005_ngaoa3.jpg'),
      img('v1783215760/DSC03023_yyyhhw.jpg'),
      img('v1783215757/DSC02974_ylnfza.jpg'),
      img('v1783215755/DSC02870_u7z7nt.jpg'),
      img('v1783215752/DSC02690_sqi1lq.jpg'),
      img('v1783215750/DSC02577_irtxcy.jpg'),
      img('v1783215747/DSC02564_ijzi3k.jpg'),
      img('v1783215745/DSC02511_xzbmlq.jpg'),
    ],
  },




  {
    id: 'indira-paganotto-mmw',
    name: 'Indira Paganotto @ Factory Town',
    category: ['film'],
    year: 2026,
    cover: CDN('v1783215213/HzelVillan009949-R1-018_przfue.jpg'),
    items: [
      img('v1783215213/HzelVillan009949-R1-018_przfue.jpg'),
      img('v1783215211/HzelVillan009951-R1-007_puarg1.jpg'),
      img('v1783215210/HzelVillan009949-R1-010_hws6n0.jpg'),
      img('a_90/v1783215209/HzelVillan009948-R1-036_izy6dg.jpg'),
      img('a_90/v1783215208/HzelVillan009948-R1-024_kpx76b.jpg'),
      img('a_90/v1783215208/HzelVillan009949-R1-006_eld9gb.jpg'),
      img('v1783215208/HzelVillan009949-R1-004_hrmrgn.jpg'),
      img('a_-90/v1783215207/HzelVillan009948-R1-004_ji7lmd.jpg'),
      img('v1783215201/HzelVillan009948-R1-017_dhyiiz.jpg'),
      img('v1783215199/HzelVillan009948-R1-012_fbuxvw.jpg'),
      img('v1783215198/HzelVillan009946-R1-036_hmdprh.jpg'),
      img('a_90/v1783215196/HzelVillan009946-R1-033_zmoqlc.jpg'),
      img('v1783215194/HzelVillan009946-R1-016_amr6vp.jpg'),
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




  {
    id: 'dion-academy-la',
    name: 'DIØN @ Academy LA',
    category: ['photo', 'video'],
    year: 2026,
    cover: CDN('v1783215667/DSC08626_e4hzty.jpg'),
    items: [
      vimeo(1207076144),
      vimeo(1207075991),
      vimeo(1207075972),
      vimeo(1207075970),
      vimeo(1207075958),
      vimeo(1207075858),
      vimeo(1207075782),
      vimeo(1207075762),
      img('v1783215667/DSC08626_e4hzty.jpg'),
      img('v1783215666/DSC08623_ytxpga.jpg'),
      img('v1783215663/DSC08612_nsvnrd.jpg'),
      img('v1783215661/DSC08569_mj9ngq.jpg'),
      img('v1783215658/DSC08441_q1xffl.jpg'),
      img('v1783215656/DSC08360_oj9vvi.jpg'),
      img('v1783215655/DSC08330_nuangc.jpg'),
      img('v1783215652/DSC08319_axhvrr.jpg'),
      img('v1783215650/DSC08264_csxfzb.jpg'),
      img('v1783215646/DSC08250_c8zkxp.jpg'),
      img('v1783215645/DSC08121_boio8t.jpg'),
      img('v1783215644/DSC08001_gvgtdp.jpg'),
      img('v1783215642/DSC07998_vphn85.jpg'),
    ],
  },
];

/* ═══════════════════════════════════════
   Full gallery for Pictures / Film Photos / Video tabs
   ═══════════════════════════════════════ */
window.GALLERY = {

  photo: [
    img('v1773630222/DSC01096_scgnpu.jpg'),      // DIØN
    img('v1783215516/DSC05759_tntsod.jpg'),
    img('v1783215661/DSC08569_mj9ngq.jpg'),
    img('v1773633472/DSC07061_t1fkpg.jpg'),      // Elliot & Liam
    img('v1783215732/DSC01966_causkx.jpg'),
    img('v1773633500/funk1_vh29g5.jpg'),         // Seismic
    img('v1783215055/DSC08767_yaqsrj.jpg'),
    img('v1783214808/Photo_Mar_26_2026_2_00_14_PM_xlo5qv.jpg'),
    img('v1773633493/DSC03827_wallba.png'),      // NEW
    img('v1773633502/funkyy_qxi3n8.jpg'),       // Seismic
    img('v1783215644/DSC08001_gvgtdp.jpg'),
    img('v1773630229/DSC06789_zlnwpj.jpg'),      // Beatport — Cole
    img('v1783215645/DSC08121_boio8t.jpg'),
    img('v1783215045/DSC07976_eu0lfm.jpg'),
    img('v1773633496/funk2_r71vbk.jpg'),         // Seismic
    img('v1783215546/DSC04038_vbqkrw.jpg'),
    img('v1783215493/DSC05296_vyemwi.jpg'),
    img('v1783215570/DSC04794_cwpp6g.jpg'),
    img('v1783215632/DSC03886_jxyc3j.jpg'),
    img('v1773630577/DSC07176_mxwwgi.jpg'),      // Beatport — Beltran
    img('v1773630574/DSC07216_oh7ffb.jpg'),      // Beatport — Beltran
    img('v1773630230/DSC06837_ozi8qr.jpg'),      // Beatport — Cole
    img('v1783215551/DSC04071_bmmpzv.jpg'),
    img('v1773633499/mochakk2_hwm3xm.jpg'),      // Seismic
    img('v1783215667/DSC08626_e4hzty.jpg'),
    img('v1783215611/DSC03672_cbrkps.jpg'),
    img('v1773633456/DSC00161_srsn5r.jpg'),      // Ranger Trucco
    img('v1783215395/LIB2026_0522_210140-_06645__ivilla.11_ch9wi3.jpg'),
    img('v1773633462/IMG_7879_sav5kk.jpg'),      // Ranger Trucco
    img('v1773630219/DSC01320_fvilnt.jpg'),      // DIØN
    img('v1773633491/DSC08029_e6sq37.jpg'),      // NEW
    img('v1773630576/DSC07145_yjp8xk.jpg'),      // Beatport — Beltran
    img('v1773633497/mochakk_ma4u3q.jpg'),       // Seismic
    img('v1773630575/DSC07209_pwevdt.jpg'),      // Beatport — Beltran
    img('v1773633483/DSC02673_gug2qs.jpg'),      // NEW
    img('v1773633505/mochakk3_p46cmx.jpg'),      // Seismic
    img('v1773633455/DSC00305_fsclhh.jpg'),      // Ranger Trucco
    img('v1783215703/DSC00865_liql96.jpg'),
    img('v1773630233/DSC06881_aowrm4.jpg'),      // Beatport — Cole
    img('v1773630216/DSC01520_v09fcc.jpg'),      // DIØN
    img('v1783215739/DSC02235_za8qr5.jpg'),
    img('v1783215760/DSC03023_yyyhhw.jpg'),
    img('v1773630578/DSC07103_lpic2p.jpg'),      // Beatport — Beltran
    img('v1783215500/DSC05429_nbmztt.jpg'),
    img('v1773633452/DSC09771_pe0pwj.jpg'),      // Ranger Trucco
    img('v1773633458/DSC09348_b7oovx.jpg'),      // Ranger Trucco
    img('v1783215409/LIB2026_0522_222102-_07071__ivilla.11_uw2jo4.jpg'),
    img('v1783215267/DSC00256_nz48ie.jpg'),
    img('v1783214808/Photo_Mar_26_2026_3_31_23_PM_zhbrkh.jpg'),
    img('v1783215417/LIB2026_0523_002340-_07501__ivilla.11_q34exw.jpg'),
    img('v1773633503/crowd1_kjc89c.jpg'),        // Seismic
    img('v1783215270/DSC00432_tguzmb.jpg'),
    img('v1773630206/DSC03603_tvbmlz.jpg'),      // Ian Asher
    img('v1783215272/DSC00734_uhlpdj.jpg'),
    img('v1773633460/DSC09614_mkoovr.jpg'),      // Ranger Trucco
    img('v1783215052/DSC08511_wlkn67.jpg'),
    img('v1773630207/DSC04319_fwwi7p.jpg'),      // Ian Asher
    img('v1773630218/DSC01514_tetiua.jpg'),      // DIØN
    img('v1783215403/LIB2026_0522_221520-_06988__ivilla.11_we9v9t.jpg'),
    img('v1783215752/DSC02690_sqi1lq.jpg'),
    img('v1783215615/DSC03687_bytzma.jpg'),
    img('v1783215425/LIB2026_0523_144344-_07818__ivilla.11_m1o2i0.jpg'),
    img('v1783214813/Photo_Mar_26_2026_6_01_26_PM_diz5og.jpg'),
    img('v1783215487/DSC05206_w49ky1.jpg'),
    img('v1783215420/LIB2026_0523_142653-_07701__ivilla.11_oekcaq.jpg'),
    img('v1773633469/DSC06833_ixwpgo.jpg'),      // Elliot & Liam
    img('v1773633467/DSC06074_exwvvh.jpg'),      // Elliot & Liam
    img('v1773633470/DSC06641_n01mq4.jpg'),      // Elliot & Liam
    img('v1783215413/LIB2026_0523_000359-_07284__ivilla.11_wvwjly.jpg'),
    img('v1773630231/DSC06898_vhje4g.jpg'),      // Beatport — Cole
    img('v1783215266/DSC00238_ng7lla.jpg'),
    img('v1773633459/DSC00259_gqbh7j.jpg'),      // Ranger Trucco
    img('v1773630209/DSC03309_gknta0.jpg'),      // Ian Asher
  ],

  film: [
    img('v1773634651/IMG_2580_etu2g4.jpg'),
    img('a_-90/v1773634501/IMG_1782_p2lzlw.jpg'),
    img('v1773634644/IMG_2570_s4ri4z.jpg'),
    img('a_90/v1783215196/HzelVillan009946-R1-033_zmoqlc.jpg'),
    img('a_-90/v1783215110/IMG_4997_wtazvl.jpg'),
    img('a_-90/v1783215118/IMG_5058_qcfms9.jpg'),
    img('v1783215124/IMG_5349_dvxr3j.jpg'),
    img('v1783215100/IMG_4958_wk004j.jpg'),
    img('a_90/v1783215208/HzelVillan009948-R1-024_kpx76b.jpg'),
    img('v1783215117/IMG_5065_vjx6yn.jpg'),
    img('v1773633632/IMG_6294_d8qndo.jpg'),
    img('v1783215124/IMG_5364_w5c9vx.jpg'),
    img('v1773633624/IMG_6285_zkbtxa.jpg'),
    img('v1773634631/IMG_2600_ftw3i4.jpg'),
    img('v1783215117/IMG_5002_zl170j.jpg'),
    img('v1773634515/IMG_1913_mrmkip.jpg'),
    img('v1773634646/IMG_2633_xvmvwh.jpg'),
    img('a_-90/v1773634498/IMG_1869_zpciay.jpg'),
    img('v1783215771/000075190025_izsqfn.jpg'),
    img('v1783215210/HzelVillan009949-R1-010_hws6n0.jpg'),
    img('v1783215208/HzelVillan009949-R1-004_hrmrgn.jpg'),
    img('a_90/v1783215209/HzelVillan009948-R1-036_izy6dg.jpg'),
    img('v1773634128/IMG_1889_zwotaj.jpg'),
    img('v1783215211/HzelVillan009951-R1-007_puarg1.jpg'),
    img('a_-90/v1783215117/IMG_5016_lddhhl.jpg'),
    img('v1773634528/IMG_1897_l7fmer.jpg'),
    img('v1773634480/IMG_1799_ygshsd.jpg'),
    img('a_-90/v1773634540/IMG_1876_2_ki1xke.jpg'),
    img('a_90/v1783215208/HzelVillan009949-R1-006_eld9gb.jpg'),
    img('a_-90/v1783214810/Photo_Mar_31_2026_12_33_41_PM_2_wog46r.jpg'),
    img('v1773634653/IMG_2610_v9tae4.jpg'),
    img('v1773634655/IMG_2572_gafotp.jpg'),
    img('v1783215199/HzelVillan009948-R1-012_fbuxvw.jpg'),
    img('a_90/v1783215101/IMG_4966_l63u40.jpg'),
    img('v1783215102/IMG_4979_ehp1pf.jpg'),
    img('a_-90/v1783215121/IMG_5009_b1wad3.jpg'),
    img('v1783215789/000075260037_ewjlmy.jpg'),
    img('v1783215213/HzelVillan009949-R1-018_przfue.jpg'),
    img('v1773634507/IMG_1795_sicwvt.jpg'),
    img('v1773634638/IMG_2628_pjgo10.jpg'),
    img('v1773634660/IMG_2626_yj9whj.jpg'),
    img('v1783215105/IMG_5001_tuq2bb.jpg'),
    img('v1783215194/HzelVillan009946-R1-016_amr6vp.jpg'),
    img('a_-90/v1783215207/HzelVillan009948-R1-004_ji7lmd.jpg'),
    img('v1783215109/IMG_4994_yb4rhw.jpg'),
    img('a_180/v1783215774/000075260004_foekdn.jpg'),
    img('v1773634635/IMG_2603_d3yqvf.jpg'),
    img('a_-90/v1783214815/Photo_Mar_31_2026_12_33_41_PM_6_rrlw7q.jpg'),
    img('v1783215121/IMG_5086_qo8eo8.jpg'),
    img('a_-90/v1783215121/IMG_5078_bsuh3b.jpg'),
    img('v1773634664/IMG_2631_wpfm8m.jpg'),
    img('v1773633601/IMG_6218_qarhhd.jpg'),
    img('v1773634642/IMG_2604_bd9xiq.jpg'),
    img('v1783215113/IMG_5024_slig9t.jpg'),
    img('v1783214813/Photo_Mar_31_2026_12_33_41_PM_pigidw.jpg'),
    img('v1783215103/IMG_4991_ctwww0.jpg'),
    img('v1783215124/IMG_5074_nbsinb.jpg'),
    img('v1773634662/IMG_2629_webz7u.jpg'),
    img('v1783215110/IMG_5006_bva8i3.jpg'),
    img('v1783215198/HzelVillan009946-R1-036_hmdprh.jpg'),
    img('v1773634668/IMG_2595_cbhbec.jpg'),
    img('a_90/v1773636173/IMG_9204_gvuzad.jpg'),
    img('v1783215769/000075190009_fiabwy.jpg'),
    img('v1783215201/HzelVillan009948-R1-017_dhyiiz.jpg'),
    img('a_-90/v1773634519/IMG_1905_2_p4yejn.jpg'),
    img('v1783215097/IMG_4953_dtblwt.jpg'),
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
    // Carson Paskill @ Saravejo
    mc(vimeo(1207076802)),
    mc(vimeo(1207076281)),
    mc(vimeo(1207076232)),
    mc(vimeo(1207076221)),
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
    // DIØN @ Academy LA
    vimeo(1207076144),
    vimeo(1207075991),
    vimeo(1207075972),
    vimeo(1207075970),
    vimeo(1207075958),
    vimeo(1207075858),
    vimeo(1207075782),
    vimeo(1207075762),
    // Benwal @ CoreLA 2026
    vimeoH(1207075700),
    vimeoH(1207075469),
    vimeoH(1207075470),
    vimeoH(1207075471),
    vimeoH(1207075472),
    // EDC Las Vegas 2026 — Benwal
    vimeo(1207075101),
    vimeo(1207074535),
    vimeo(1207074436),
    vimeo(1207074435),
    vimeo(1207074437),
    vimeo(1207074438),
  ],

};
