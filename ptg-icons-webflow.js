/* PTG animated icon library — generated for Webflow.
   Source: PTG Design System icons/ptg-icons.js
   97 icons. Markup + GSAP timelines, no module syntax.
   Consumed by the site-wide wiring in the Footer component:
   an element with data-ptg-icon="name" gets that icon's SVG and timeline. */
(function(){
  var S = function(body){
    return '<svg class="icon_svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
         + 'stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
         + body + '</svg>';
  };

  function draw(g,tl,el,dur,at,from){
    if(!el) return tl;
    var els = (el instanceof NodeList || Array.isArray(el)) ? Array.from(el) : [el];
    els.forEach(function(e,i){
      var L = e.getTotalLength ? e.getTotalLength() : 24;
      g.set(e,{strokeDasharray:L,strokeDashoffset:0});
      tl.fromTo(e,{strokeDashoffset:(from==='end'?-L:L)},
                  {strokeDashoffset:0,duration:dur,ease:'power2.inOut'},(at||0)+i*0.08);
    });
    return tl;
  }
  function pop(g,tl,el,at,s){
    return el ? tl.fromTo(el,{scale:s||0.2,opacity:0,transformOrigin:'50% 50%'},
                             {scale:1,opacity:1,duration:0.5,ease:'back.out(2.4)'},at||0) : tl;
  }

  var BODIES = {
  add: "<path class=\"v\" d=\"M12 4.2v15.6\"/><path class=\"h\" d=\"M4.2 12h15.6\"/>",
  alert_broadcast: "<circle class=\"ring\" cx=\"12\" cy=\"13.6\" r=\"7\"/><path class=\"bar\" d=\"M12 9.8v4.4\"/><circle class=\"dot\" cx=\"12\" cy=\"17.2\" r=\"0.85\"/><path class=\"ray\" d=\"M4.6 5.2a10.4 10.4 0 0 1 3-2.2M19.4 5.2a10.4 10.4 0 0 0-3-2.2\"/>",
  arrow_back: "<path class=\"sh\" d=\"M20.4 12h-16\"/><path class=\"hd\" d=\"M10.6 5.8 4.2 12l6.4 6.2\"/>",
  arrow_downward: "<path class=\"sh\" d=\"M12 3.6v16\"/><path class=\"hd\" d=\"M5.8 13.4 12 19.8l6.2-6.4\"/>",
  arrow_forward: "<path class=\"sh\" d=\"M3.6 12h16\"/><path class=\"hd\" d=\"M13.4 5.8 19.8 12l-6.4 6.2\"/>",
  arrow_motion: "<path class=\"sh\" d=\"M6.6 12h11\"/><path class=\"hd\" d=\"M14.4 8.8 17.6 12l-3.2 3.2\"/><path class=\"mo\" d=\"M2.6 8.8h3.2M2.6 15.2h3.2\"/>",
  arrow_upward: "<path class=\"sh\" d=\"M12 20.4v-16\"/><path class=\"hd\" d=\"M5.8 10.6 12 4.2l6.2 6.4\"/>",
  award_medal: "<circle class=\"md\" cx=\"12\" cy=\"8.6\" r=\"5.8\"/><path class=\"star\" d=\"M12 5.4l1.3 2.5 2.7.4-2 1.9.5 2.7-2.5-1.4-2.5 1.4.5-2.7-2-1.9 2.7-.4Z\"/><path class=\"rib\" d=\"M8.2 13.6 6.2 22l5.8-2.8L17.8 22l-2-8.4\"/>",
  badge_check: "<path class=\"bd\" d=\"M8.6 2.4h6.8l6.2 6.2v6.8l-6.2 6.2H8.6L2.4 15.4V8.6Z\"/><path class=\"t\" d=\"M7.8 12.3 10.9 15.4 16.4 8.7\"/>",
  bank: "<path class=\"rf\" d=\"M2.8 8.4 12 3.4l9.2 5Z\"/><path class=\"col\" d=\"M5.6 10.4v7.2M9.9 10.4v7.2M14.1 10.4v7.2M18.4 10.4v7.2\"/><path class=\"bs\" d=\"M3 20.6h18\"/>",
  bar_chart: "<path class=\"ax\" d=\"M3.4 20.6h17.2\"/><path class=\"b1\" d=\"M6.6 20.6v-5\"/><path class=\"b2\" d=\"M11.4 20.6v-9\"/><path class=\"b3\" d=\"M16.2 20.6v-13\"/><circle class=\"spark\" cx=\"20\" cy=\"5.6\" r=\"1.2\"/>",
  bell_ringing: "<path class=\"bl\" d=\"M7 17.4V11a5 5 0 0 1 10 0v6.4Z\"/><path class=\"cl\" d=\"M10.4 19.6a1.7 1.7 0 0 0 3.2 0\"/><path class=\"w1\" d=\"M3.4 9.6a7 7 0 0 1 2.4-4.4M20.6 9.6a7 7 0 0 0-2.4-4.4\"/>",
  bolt: "<path class=\"bt\" d=\"M13.4 2.4 6 13.4h4.4L9.8 21.6 17.6 10h-4.6Z\"/>",
  box: "<path class=\"lid\" d=\"M2.8 4.4h18.4v4H2.8Z\"/><path class=\"bx\" d=\"M4.4 8.4h15.2v11.2H4.4Z\"/><path class=\"hd\" d=\"M9.8 12h4.4\"/>",
  bug: "<path class=\"bd\" d=\"M8 8.6h8v5a4 4 0 0 1-8 0Z\"/><path class=\"lg\" d=\"M8 10.6H4.4M20 10.6h-4M8 14.4l-3.4 2.4M16 14.4l3.4 2.4M9.6 8.6 8 5.4M14.4 8.6 16 5.4\"/>",
  cable: "<path class=\"cd\" d=\"M6 3.6v5.2c0 4 12 2.4 12 6.4v5.2\"/><rect class=\"p1\" x=\"3.4\" y=\"2\" width=\"5.2\" height=\"2.6\"/><rect class=\"p2\" x=\"15.4\" y=\"19.4\" width=\"5.2\" height=\"2.6\"/>",
  calculator: "<rect class=\"bd\" x=\"3.6\" y=\"2.6\" width=\"16.8\" height=\"18.8\"/><path class=\"dsp\" d=\"M6.4 5.6h11.2v3.4H6.4Z\"/><rect class=\"k\" x=\"6.4\" y=\"11.4\" width=\"3\" height=\"2.4\"/><rect class=\"k\" x=\"10.5\" y=\"11.4\" width=\"3\" height=\"2.4\"/><rect class=\"k\" x=\"14.6\" y=\"11.4\" width=\"3\" height=\"2.4\"/><rect class=\"k\" x=\"6.4\" y=\"15.6\" width=\"3\" height=\"2.4\"/><rect class=\"k\" x=\"10.5\" y=\"15.6\" width=\"3\" height=\"2.4\"/><rect class=\"k\" x=\"14.6\" y=\"15.6\" width=\"3\" height=\"2.4\"/>",
  call: "<path class=\"rc\" d=\"M6.6 3.4c1 0 1.6.5 1.9 1.4l.8 2.3c.2.7 0 1.3-.6 1.7l-1.2.9c1 2.2 2.6 3.8 4.8 4.8l.9-1.2c.4-.5 1-.7 1.7-.5l2.3.8c.9.3 1.4.9 1.4 1.9v2.1c0 1.2-1 2.1-2.2 2C9.4 19.6 4 14.2 3.4 5.5c-.1-1.2.8-2.1 2-2.1Z\"/><path class=\"w1\" d=\"M15.2 3.6a6.2 6.2 0 0 1 4.8 4.8\"/><path class=\"w2\" d=\"M14.4 7a3 3 0 0 1 2.3 2.3\"/>",
  call_blocked: "<path class=\"rc\" d=\"M5.4 5.4c.9 0 1.4.4 1.7 1.2l.7 2c.2.6 0 1.2-.5 1.5l-1.1.8c.9 2 2.3 3.4 4.3 4.3l.8-1.1c.4-.5.9-.6 1.5-.4l2 .7c.8.3 1.2.8 1.2 1.7v1.9c0 1.1-.9 1.9-2 1.8-7.6-.6-12.4-5.4-13-13-.1-1.1.7-1.9 1.8-1.8Z\"/><circle class=\"ring\" cx=\"17.6\" cy=\"6.4\" r=\"4.4\"/><path class=\"sl\" d=\"M14.8 3.6 20.4 9.2\"/>",
  cart: "<path class=\"bs\" d=\"M2.6 4.4h2.8l2.6 10.4h9.6l2.4-7.6H6.4\"/><circle class=\"wh\" cx=\"9\" cy=\"19\" r=\"1.7\"/><circle class=\"wh\" cx=\"16.6\" cy=\"19\" r=\"1.7\"/>",
  chart_line: "<path class=\"ax\" d=\"M3.4 3.6v17h17\"/><path class=\"ln\" d=\"M6 16.4 10.2 11.2 13.6 14 19.6 6.6\"/><circle class=\"dot\" cx=\"19.6\" cy=\"6.6\" r=\"1.5\"/>",
  checklist: "<path class=\"pg\" d=\"M3.4 4.6h17.2v14.8H3.4Z\"/><path class=\"ln\" d=\"M6.4 9h6.2M6.4 12.4h6.2M6.4 15.8h3.6\"/><path class=\"t\" d=\"M14.6 13.6 16.4 15.4 20 11.6\"/>",
  chevron_down: "<path class=\"ch\" d=\"M5 8.8 12 15.6l7-6.8\"/>",
  city_buildings: "<path class=\"bd\" d=\"M3 21V9.6l5.6-3.2V21M8.6 21V3.6L21 8.2V21H3\"/><rect class=\"w\" x=\"11.2\" y=\"10.4\" width=\"2.2\" height=\"2.2\"/><rect class=\"w\" x=\"15.6\" y=\"10.4\" width=\"2.2\" height=\"2.2\"/><rect class=\"w\" x=\"11.2\" y=\"14.8\" width=\"2.2\" height=\"2.2\"/><rect class=\"w\" x=\"15.6\" y=\"14.8\" width=\"2.2\" height=\"2.2\"/>",
  close: "<path class=\"a\" d=\"M5.4 5.4 18.6 18.6\"/><path class=\"b\" d=\"M18.6 5.4 5.4 18.6\"/>",
  cloud: "<path class=\"cl\" d=\"M6.6 18.8h10.8a4 4 0 0 0 .4-8A6 6 0 0 0 6.7 12a3.4 3.4 0 0 0-.1 6.8Z\"/>",
  cloud_done: "<path class=\"cl\" d=\"M6.6 18.8h10.8a4 4 0 0 0 .4-8A6 6 0 0 0 6.7 12a3.4 3.4 0 0 0-.1 6.8Z\"/><path class=\"t\" d=\"M9 13.2 11.4 15.6 15.6 10.6\"/>",
  cloud_download: "<path class=\"cl\" d=\"M6.6 18.8h10.8a4 4 0 0 0 .4-8A6 6 0 0 0 6.7 12a3.4 3.4 0 0 0-.1 6.8Z\"/><path class=\"dn\" d=\"M12 9.4v7M9.4 14l2.6 2.6 2.6-2.6\"/>",
  cloud_off: "<path class=\"cl\" d=\"M6.6 18.8h10.8a4 4 0 0 0 .4-8A6 6 0 0 0 6.7 12a3.4 3.4 0 0 0-.1 6.8Z\"/><path class=\"sl\" d=\"M4 4 20 20\"/>",
  cloud_sync: "<path class=\"cl\" d=\"M6.6 18.8h10.8a4 4 0 0 0 .4-8A6 6 0 0 0 6.7 12a3.4 3.4 0 0 0-.1 6.8Z\"/><g class=\"rot\"><path d=\"M15.4 13.4a3.4 3.4 0 1 1-1-2.4\"/><path d=\"M15.4 9.6v1.6h-1.6\"/></g>",
  cloud_upload: "<path class=\"cl\" d=\"M6.6 18.8h10.8a4 4 0 0 0 .4-8A6 6 0 0 0 6.7 12a3.4 3.4 0 0 0-.1 6.8Z\"/><path class=\"up\" d=\"M12 16.4V9.4M9.4 11.8 12 9.2l2.6 2.6\"/>",
  coin_stack: "<ellipse class=\"cn\" cx=\"12\" cy=\"6.6\" rx=\"7.4\" ry=\"2.8\"/><path class=\"cn2\" d=\"M4.6 6.6v4.8c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8V6.6\"/><path class=\"cn3\" d=\"M4.6 11.4v4.8c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8v-4.8\"/>",
  compass: "<path class=\"cp\" d=\"M12 2.6 6 20.6M12 2.6l6 18\"/><path class=\"ac\" d=\"M6.6 15a10 10 0 0 0 10.8 0\"/>",
  crane: "<path class=\"mast\" d=\"M6.6 21.4V4.2\"/><path class=\"jib\" d=\"M2.6 4.2h18.8\"/><path class=\"brace\" d=\"M6.6 8.2 12.4 4.2M6.6 8.2 3.4 4.2\"/><path class=\"line\" d=\"M17.6 4.2v6.4\"/><path class=\"hook\" d=\"M16.4 10.6h2.4v2.2\"/><path class=\"base\" d=\"M3.6 21.4h6\"/>",
  credit_cards: "<path class=\"back\" d=\"M6.4 6.4h15v2.6\"/><rect class=\"front\" x=\"2.6\" y=\"9\" width=\"15\" height=\"10.6\"/><path class=\"stripe\" d=\"M2.6 12.4h15\"/><rect class=\"chip\" x=\"5\" y=\"14.6\" width=\"3.2\" height=\"2.4\"/>",
  cursor_click: "<path class=\"cur\" d=\"M8.4 5.2 18.6 15l-4.7.5 2.5 4.9-2.1 1-2.5-4.9-3.4 3.3Z\"/><path class=\"r1\" d=\"M8.6 2.6a6.4 6.4 0 0 0-6 6\"/><path class=\"r2\" d=\"M9 6.4a3 3 0 0 0-2.6 2.6\"/>",
  devices: "<path class=\"mn\" d=\"M2.6 5.4h14.8v9.2H2.6Z\"/><path class=\"st\" d=\"M6.6 18.6h7\"/><rect class=\"ph\" x=\"18\" y=\"9.4\" width=\"3.6\" height=\"9.2\"/>",
  diamond: "<path class=\"crown\" d=\"M7.4 3.6h9.2L21 9.4H3Z\"/><path class=\"pav\" d=\"M3 9.4 12 20.8 21 9.4\"/><path class=\"fct\" d=\"M7.4 3.6 9.6 9.4 12 20.8M16.6 3.6l-2.2 5.8L12 20.8M9.6 9.4h4.8\"/>",
  document: "<path class=\"pg\" d=\"M6 2.6h8l4.4 4.4v14.4H6Z\"/><path class=\"fold\" d=\"M14 2.6V7h4.4\"/><path class=\"ln\" d=\"M8.8 12h6.4\"/><path class=\"ln\" d=\"M8.8 15.2h6.4\"/><path class=\"ln\" d=\"M8.8 18.4h4\"/>",
  double_check: "<path class=\"t1\" d=\"M1.8 12.6 5.9 16.8 14.2 7\"/><path class=\"t2\" d=\"M9.4 12.6 12.9 16.8 21.4 7\"/>",
  edit_lines: "<path class=\"ln\" d=\"M3.4 6.6h13M3.4 11h13M3.4 15.4h7\"/><path class=\"pn\" d=\"M14.6 19.4h2.6l4-4-2.6-2.6-4 4Z\"/>",
  empty_battery: "<path class=\"cap\" d=\"M9.6 2.6h4.8v1.8H9.6Z\"/><rect class=\"cell\" x=\"6.4\" y=\"4.4\" width=\"11.2\" height=\"17\"/><rect class=\"fill\" x=\"8.4\" y=\"17.4\" width=\"7.2\" height=\"2\"/>",
  factory: "<path class=\"bd\" d=\"M2.6 20.6V11.4l5 3.2V11.4l5 3.2V11.4l8.8 3.2v6H2.6Z\"/><rect class=\"ch\" x=\"16.4\" y=\"4.6\" width=\"3\" height=\"8\"/><circle class=\"sm\" cx=\"17.9\" cy=\"3.2\" r=\"1\"/><circle class=\"sm\" cx=\"20.4\" cy=\"1.8\" r=\"0.8\"/>",
  flag: "<path class=\"pole\" d=\"M5.6 3v18\"/><path class=\"fl\" d=\"M5.6 4h12l-2.6 3.8 2.6 3.8h-12Z\"/>",
  folder_person: "<path class=\"fd\" d=\"M2.8 5.4h6.6l2 2.4h9.8v12.8H2.8Z\"/><circle class=\"hd\" cx=\"12\" cy=\"13\" r=\"1.9\"/><path class=\"bd\" d=\"M8.6 18.4c0-1.9 1.5-3 3.4-3s3.4 1.1 3.4 3\"/>",
  fork_knife: "<path class=\"fork\" d=\"M8.6 3v7.2c0 1.2-1 1.6-1 2.6V21\"/><path class=\"ft\" d=\"M6.4 3v4M10.8 3v4\"/><path class=\"knife\" d=\"M16.4 3c2 2.4 2 5.6 0 8v10\"/>",
  full_battery: "<path class=\"cap\" d=\"M9.6 2.6h4.8v1.8H9.6Z\"/><rect class=\"cell\" x=\"6.4\" y=\"4.4\" width=\"11.2\" height=\"17\"/><rect class=\"fill\" x=\"8.4\" y=\"6.4\" width=\"7.2\" height=\"13\"/>",
  gavel: "<path class=\"hm\" d=\"M15.4 2.2 20.8 7.6 17.6 10.8 12.2 5.4Z\"/><path class=\"hd\" d=\"M13.6 8.4 5.6 16.4\"/><path class=\"grip\" d=\"M4.2 15 7 17.8\"/><path class=\"bl\" d=\"M12.8 21h8.6\"/><path class=\"st\" d=\"M14.6 18.2h5\"/><path class=\"imp\" d=\"M13.4 15.2 12.2 14M20.2 15.2l1.2-1.2\"/>",
  gear: "<path class=\"rim\" d=\"M17.86 10.69L20.33 10.88L20.33 13.12L17.86 13.31L17.07 15.21L18.68 17.10L17.10 18.68L15.21 17.07L13.31 17.86L13.12 20.33L10.88 20.33L10.69 17.86L8.79 17.07L6.90 18.68L5.32 17.10L6.93 15.21L6.14 13.31L3.67 13.12L3.67 10.88L6.14 10.69L6.93 8.79L5.32 6.90L6.90 5.32L8.79 6.93L10.69 6.14L10.88 3.67L13.12 3.67L13.31 6.14L15.21 6.93L17.10 5.32L18.68 6.90L17.07 8.79Z\"/><circle class=\"hub\" cx=\"12\" cy=\"12\" r=\"2.6\"/>",
  grad_cap: "<path class=\"cap\" d=\"M1.8 8.6 12 4l10.2 4.6L12 13.2Z\"/><path class=\"tassel\" d=\"M19.6 10.4v5.2\"/><path class=\"bk\" d=\"M5.6 10.8v5.4c0 1.8 3 3 6.4 3s6.4-1.2 6.4-3v-5.4\"/>",
  headset: "<path class=\"hs\" d=\"M4.6 14V11a7.4 7.4 0 0 1 14.8 0v3\"/><rect class=\"er\" x=\"2.6\" y=\"13.4\" width=\"3.4\" height=\"5\"/><rect class=\"er\" x=\"18\" y=\"13.4\" width=\"3.4\" height=\"5\"/><path class=\"mic\" d=\"M12 21.4h4.4v-3\"/>",
  health_and_safety: "<path class=\"sh\" d=\"M12 1.9 20.4 4.9v6.8c0 4.9-3.8 8.5-8.4 10.3C7.4 20.2 3.6 16.6 3.6 11.7V4.9Z\"/><path class=\"cr\" d=\"M12 7.8v7M8.5 11.3h7\"/>",
  history: "<path class=\"rot\" d=\"M3.4 12a8.6 8.6 0 1 0 2.6-6.1\"/><path class=\"ar\" d=\"M3.4 6.4v4.2h4.2\"/><path class=\"hn\" d=\"M12 7.4V12l3.6 2.2\"/>",
  hub_spokes: "<circle class=\"hub\" cx=\"12\" cy=\"12\" r=\"3\"/><path class=\"sp\" d=\"M12 9V4.6M12 15v4.4M9 12H4.6M15 12h4.4\"/><circle class=\"n\" cx=\"12\" cy=\"3\" r=\"1.5\"/><circle class=\"n\" cx=\"12\" cy=\"21\" r=\"1.5\"/><circle class=\"n\" cx=\"3\" cy=\"12\" r=\"1.5\"/><circle class=\"n\" cx=\"21\" cy=\"12\" r=\"1.5\"/>",
  id_card: "<rect class=\"cd\" x=\"2.6\" y=\"5.4\" width=\"18.8\" height=\"13.2\"/><path class=\"tb\" d=\"M9.6 5.4V3.6h4.8v1.8Z\"/><circle class=\"hd\" cx=\"9\" cy=\"11.4\" r=\"1.9\"/><path class=\"ln\" d=\"M14.4 10.6h4M14.4 13.6h4\"/>",
  invoice: "<path class=\"pg\" d=\"M6 2.6h8l4.4 4.4v14.4H6Z\"/><path class=\"fold\" d=\"M14 2.6V7h4.4\"/><path class=\"bar\" d=\"M12 9.6v9.2\"/><path class=\"cur\" d=\"M14.2 12.2a2 2 0 0 0-2-1.6h-.9a1.9 1.9 0 0 0 0 3.8h1a1.9 1.9 0 0 1 0 3.8h-.9a2 2 0 0 1-2-1.6\"/>",
  key: "<circle class=\"hd\" cx=\"7.6\" cy=\"12\" r=\"4.4\"/><path class=\"key\" d=\"M12 12h9.4\"/><path class=\"tth\" d=\"M17.6 12v3.4M20.6 12v2.2\"/>",
  lock: "<rect class=\"bd\" x=\"4.4\" y=\"10.4\" width=\"15.2\" height=\"10.2\"/><path class=\"sk\" d=\"M8 10.4V7.6a4 4 0 0 1 8 0v2.8\"/><path class=\"kh\" d=\"M12 14v3.2\"/>",
  lock_open: "<rect class=\"bd\" x=\"4.4\" y=\"10.4\" width=\"15.2\" height=\"10.2\"/><path class=\"sk\" d=\"M8 10.4V7.6a4 4 0 0 1 8 0v2.8\"/>",
  mail: "<rect class=\"bx\" x=\"2.7\" y=\"4.6\" width=\"18.6\" height=\"14.8\"/><path class=\"fl\" d=\"M2.7 6.2 12 12.6 21.3 6.2\"/>",
  mail_open: "<path class=\"bx\" d=\"M2.7 10.4 12 4.2l9.3 6.2v9H2.7Z\"/><path class=\"fl\" d=\"M2.7 10.4 12 16.6l9.3-6.2\"/>",
  mail_secure: "<path class=\"bx\" d=\"M2.6 5h13v12.4H2.6Z\"/><path class=\"fl\" d=\"M2.6 5.6 9.1 10.4 15.6 5.6\"/><rect class=\"lk\" x=\"15.4\" y=\"14\" width=\"6\" height=\"5\"/><path class=\"sk\" d=\"M16.9 14v-1.8a1.5 1.5 0 0 1 3 0V14\"/>",
  mindset_bulb: "<circle class=\"hd\" cx=\"12\" cy=\"12\" r=\"8.6\"/><path class=\"bulb\" d=\"M12 6.6a3.6 3.6 0 0 1 2.1 6.5v1.7H9.9v-1.7A3.6 3.6 0 0 1 12 6.6Z\"/><path class=\"base\" d=\"M10.2 16.4h3.6\"/>",
  move_between: "<rect class=\"r1\" x=\"2.6\" y=\"5\" width=\"7.4\" height=\"6\"/><rect class=\"r2\" x=\"13.6\" y=\"13\" width=\"7.8\" height=\"6\"/><path class=\"ar\" d=\"M10.4 8h6.6v4.2M14.6 10.2l2.4 2.2 2.2-2.2\"/>",
  network_tree: "<rect class=\"hub\" x=\"9.2\" y=\"1.8\" width=\"5.6\" height=\"4.4\"/><path class=\"dr\" d=\"M12 6.2v4.2M4.6 14.6h14.8M4.6 14.6v2.8M12 14.6v2.8M19.4 14.6v2.8\"/><rect class=\"n\" x=\"2.2\" y=\"17.4\" width=\"4.8\" height=\"4.4\"/><rect class=\"n\" x=\"9.6\" y=\"17.4\" width=\"4.8\" height=\"4.4\"/><rect class=\"n\" x=\"17\" y=\"17.4\" width=\"4.8\" height=\"4.4\"/>",
  office_building: "<path class=\"bd\" d=\"M4 21V6.6h7.6V21M11.6 21V10.4H20V21H3\"/><rect class=\"w\" x=\"6\" y=\"9\" width=\"1.9\" height=\"1.9\"/><rect class=\"w\" x=\"14\" y=\"12.8\" width=\"1.9\" height=\"1.9\"/><rect class=\"w\" x=\"6\" y=\"13.6\" width=\"1.9\" height=\"1.9\"/><rect class=\"w\" x=\"14\" y=\"16.8\" width=\"1.9\" height=\"1.9\"/>",
  palette: "<path class=\"pl\" d=\"M12 3.4a8.6 8.6 0 0 0 0 17.2c1.4 0 2-1 2-2s-.8-2-.8-2.8c0-1 .8-1.6 1.8-1.6h1.6a4 4 0 0 0 4-4c0-4-4-6.8-8.6-6.8Z\"/><circle class=\"blob\" cx=\"8.6\" cy=\"9.4\" r=\"1.2\"/><circle class=\"blob\" cx=\"12.6\" cy=\"7.6\" r=\"1.2\"/><circle class=\"blob\" cx=\"7.6\" cy=\"13.6\" r=\"1.2\"/>",
  partner_rings: "<circle class=\"rl\" cx=\"8.8\" cy=\"12\" r=\"5.6\"/><circle class=\"rr\" cx=\"15.2\" cy=\"12\" r=\"5.6\"/>",
  peaks_line: "<path class=\"ln\" d=\"M2.8 16.4 8 11.2l3.4 3.4 4.4-4.4 4.4 4.4\"/><circle class=\"dt\" cx=\"8\" cy=\"11.2\" r=\"1.4\"/><circle class=\"dt\" cx=\"15.8\" cy=\"10.2\" r=\"1.4\"/>",
  people: "<circle class=\"pc\" cx=\"12\" cy=\"7.4\" r=\"2.8\"/><circle class=\"pl\" cx=\"5.4\" cy=\"9.6\" r=\"2.2\"/><circle class=\"pr\" cx=\"18.6\" cy=\"9.6\" r=\"2.2\"/><path class=\"bd\" d=\"M6.6 18.6c0-3 2.4-4.8 5.4-4.8s5.4 1.8 5.4 4.8\"/><path class=\"bs\" d=\"M1.8 17.4c0-2.2 1.5-3.4 3.6-3.4M22.2 17.4c0-2.2-1.5-3.4-3.6-3.4\"/>",
  person: "<circle class=\"hd\" cx=\"12\" cy=\"7.8\" r=\"3.6\"/><path class=\"sh\" d=\"M4.6 20.6c0-4.1 3.3-6.6 7.4-6.6s7.4 2.5 7.4 6.6\"/>",
  phishing: "<rect class=\"env\" x=\"2.4\" y=\"11.6\" width=\"11\" height=\"8\"/><path class=\"fl\" d=\"M2.4 11.6 7.9 15.8 13.4 11.6\"/><path class=\"hk\" d=\"M18.8 2.6v6.4a3.1 3.1 0 0 1-6.2 0\"/><path class=\"brb\" d=\"M12.6 9.2 14.9 7.2\"/>",
  pin: "<path class=\"pin\" d=\"M12 21.4s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z\"/><circle class=\"dot\" cx=\"12\" cy=\"10.2\" r=\"2.2\"/><ellipse class=\"rip\" cx=\"12\" cy=\"21\" rx=\"4.4\" ry=\"1.3\"/>",
  prohibited: "<circle class=\"ring\" cx=\"12\" cy=\"12\" r=\"9\"/><path class=\"sl\" d=\"M5.6 5.6 18.4 18.4\"/>",
  restore: "<path class=\"rot\" d=\"M5.2 12a6.8 6.8 0 1 0 2-4.8\"/><path class=\"ar\" d=\"M5.2 6.4v4.4h4.4\"/><path class=\"hn\" d=\"M12 8.6V12l2.9 1.8\"/>",
  robot: "<rect class=\"hd\" x=\"3.6\" y=\"7\" width=\"16.8\" height=\"12.4\"/><path class=\"eye\" d=\"M9 11.4v2.8\"/><path class=\"eye\" d=\"M15 11.4v2.8\"/><path class=\"ant\" d=\"M12 7V3.6\"/><circle class=\"antd\" cx=\"12\" cy=\"2.8\" r=\"1\"/>",
  robot_arm: "<path class=\"bs\" d=\"M2.6 20.6h9v-2.8h-9Z\"/><path class=\"a1\" d=\"M6.6 17.8 9 9.4\"/><path class=\"a2\" d=\"M9 9.4 15.8 7.4\"/><path class=\"gp\" d=\"M15.6 4.8h4.4v5.2h-4.4Z\"/>",
  rollback: "<path class=\"rot\" d=\"M5.2 12a6.8 6.8 0 1 0 2-4.8\"/><path class=\"ar\" d=\"M5.2 6.6v4h4\"/><circle class=\"dot\" cx=\"12\" cy=\"12\" r=\"1.8\"/>",
  schedule: "<path class=\"ring\" d=\"M12 2.6a9.4 9.4 0 1 1 0 18.8 9.4 9.4 0 0 1 0-18.8Z\"/><path class=\"hn\" d=\"M12 6.8V12l4 2.4\"/>",
  send: "<path class=\"pl\" d=\"M3.4 10.8 20.4 3.6l-7.2 16.8-2-7.4Z\"/><path class=\"cr\" d=\"M11.2 13 20.4 3.6\"/>",
  server_racks: "<rect class=\"rk\" x=\"2.6\" y=\"3.6\" width=\"18.8\" height=\"6.4\"/><rect class=\"rk\" x=\"2.6\" y=\"14\" width=\"18.8\" height=\"6.4\"/><circle class=\"dt\" cx=\"6.4\" cy=\"6.8\" r=\"1\"/><circle class=\"dt\" cx=\"6.4\" cy=\"17.2\" r=\"1\"/>",
  shield_admin: "<path class=\"sh\" d=\"M12 1.9 20.4 4.9v6.8c0 4.9-3.8 8.5-8.4 10.3C7.4 20.2 3.6 16.6 3.6 11.7V4.9Z\"/><circle class=\"hd\" cx=\"12\" cy=\"8.8\" r=\"2.2\"/><path class=\"bd\" d=\"M8.2 15.6c0-2 1.7-3.2 3.8-3.2s3.8 1.2 3.8 3.2\"/><path class=\"dots\" d=\"M9.6 18.6h4.8\"/>",
  shield_check: "<path class=\"sh\" d=\"M12 1.9 20.4 4.9v6.8c0 4.9-3.8 8.5-8.4 10.3C7.4 20.2 3.6 16.6 3.6 11.7V4.9Z\"/><path class=\"t\" d=\"M7.8 12.3 10.9 15.4 16.4 8.7\"/>",
  shield_keyhole: "<path class=\"sh\" d=\"M12 1.9 20.4 4.9v6.8c0 4.9-3.8 8.5-8.4 10.3C7.4 20.2 3.6 16.6 3.6 11.7V4.9Z\"/><circle class=\"dot\" cx=\"12\" cy=\"10.6\" r=\"1.9\"/><path class=\"st\" d=\"M12 12.5v3.6\"/>",
  shield_padlock: "<path class=\"sh\" d=\"M12 1.9 20.4 4.9v6.8c0 4.9-3.8 8.5-8.4 10.3C7.4 20.2 3.6 16.6 3.6 11.7V4.9Z\"/><rect class=\"bd\" x=\"8.4\" y=\"11\" width=\"7.2\" height=\"5.6\"/><path class=\"sk\" d=\"M10 11V9.6a2 2 0 0 1 4 0V11\"/>",
  shield_person: "<path class=\"sh\" d=\"M12 1.9 20.4 4.9v6.8c0 4.9-3.8 8.5-8.4 10.3C7.4 20.2 3.6 16.6 3.6 11.7V4.9Z\"/><circle class=\"hd\" cx=\"12\" cy=\"9.4\" r=\"2.3\"/><path class=\"bd\" d=\"M8 16.6c0-2.2 1.8-3.4 4-3.4s4 1.2 4 3.4\"/>",
  sliders: "<path class=\"rl\" d=\"M3.4 7h17M3.4 12h17M3.4 17h17\"/><circle class=\"kn\" cx=\"8\" cy=\"7\" r=\"1.9\"/><circle class=\"kn\" cx=\"15\" cy=\"12\" r=\"1.9\"/><circle class=\"kn\" cx=\"10\" cy=\"17\" r=\"1.9\"/>",
  speedometer: "<path class=\"dial\" d=\"M3.4 17.6a9.4 9.4 0 1 1 17.2 0\"/><path class=\"tick\" d=\"M5.6 11.4 7 12.2M12 5.6v1.6M18.4 11.4 17 12.2\"/><path class=\"ndl\" d=\"M12 16.6 16.8 9.8\"/><circle class=\"hub\" cx=\"12\" cy=\"17\" r=\"1.5\"/>",
  sun: "<circle class=\"bd\" cx=\"12\" cy=\"12\" r=\"5.2\"/><path class=\"sp\" d=\"M12 6.8V2.8M12 17.2v4M6.8 12h-4M17.2 12h4M8.3 8.3 5.5 5.5M15.7 15.7l2.8 2.8M15.7 8.3l2.8-2.8M8.3 15.7l-2.8 2.8\"/>",
  swap_horiz: "<path class=\"a1\" d=\"M4 8.6h12.4M13.6 5.8l2.8 2.8-2.8 2.8\"/><path class=\"a2\" d=\"M20 15.4H7.6M10.4 12.6 7.6 15.4l2.8 2.8\"/>",
  sync_alt: "<path class=\"a1\" d=\"M3.6 9.4h14.8M15.4 6.4l3 3-3 3\"/><path class=\"a2\" d=\"M20.4 15.4H5.6M8.6 12.4l-3 3 3 3\"/>",
  three_circles: "<circle class=\"ws\" cx=\"12\" cy=\"6.4\" r=\"3.4\"/><circle class=\"ws\" cx=\"6\" cy=\"17\" r=\"3.4\"/><circle class=\"ws\" cx=\"18\" cy=\"17\" r=\"3.4\"/>",
  trending_up: "<path class=\"ln\" d=\"M3.4 17.4 9.4 11.4l3.4 3.4 5.6-5.6\"/><path class=\"hd\" d=\"M13.6 8.6h5.4V14\"/>",
  truck: "<path class=\"bd\" d=\"M2.6 6.4h11.2v10.2H2.6Z\"/><path class=\"cb\" d=\"M13.8 10h4.2l3.4 3.4v3.2h-7.6Z\"/><circle class=\"wh\" cx=\"7\" cy=\"18.6\" r=\"1.9\"/><circle class=\"wh\" cx=\"17.4\" cy=\"18.6\" r=\"1.9\"/>",
  warning: "<path class=\"tri\" d=\"M12 3.4 21.2 20.2H2.8Z\"/><path class=\"bar\" d=\"M12 9v4.6\"/><circle class=\"dot\" cx=\"12\" cy=\"16.8\" r=\"0.85\"/>",
  wifi: "<path class=\"w3\" d=\"M2.6 8.6a14 14 0 0 1 18.8 0\"/><path class=\"w2\" d=\"M6 12.4a9.2 9.2 0 0 1 12 0\"/><path class=\"w1\" d=\"M9.2 16a4.6 4.6 0 0 1 5.6 0\"/><circle class=\"dot\" cx=\"12\" cy=\"19.4\" r=\"1.2\"/>",
  wrench: "<path class=\"wr\" d=\"M20.4 6.2 17.2 9.4 14.6 6.8 17.8 3.6a5.6 5.6 0 0 0-7.3 6.9l-6.6 6.6a2 2 0 0 0 2.8 2.8l6.6-6.6a5.6 5.6 0 0 0 7.1-7.1Z\"/>"
  };

  var TIMELINES = {
  add: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r, { rotate: -90, scale: 0.5, transformOrigin: '50% 50%' }, { rotate: 0, scale: 1, duration: 0.6, ease: 'back.out(2.2)' }, 0);
      draw(g, t, r.querySelector('.v'), 0.4, 0);
      draw(g, t, r.querySelector('.h'), 0.4, 0.1);
      return t;
    },
  alert_broadcast: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.ring'), 0.55, 0); draw(g, t, r.querySelector('.bar'), 0.28, 0.26); pop(g, t, r.querySelector('.dot'), 0.38, 0.2); draw(g, t, r.querySelector('.ray'), 0.35, 0.34); t.to(r.querySelector('.ray'), { opacity: 0.3, duration: 0.26, yoyo: true, repeat: 3 }, 0.6); return t; }
  },,
  arrow_back: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { scaleX: 0, transformOrigin: '100% 50%', opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.42, ease: 'power3.out' }, 0)
        .fromTo(r.querySelector('.hd'), { x: 7, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, 0.08)
        .to(r, { x: -2.2, duration: 0.18, ease: 'power2.out' }, 0.34).to(r, { x: 0, duration: 0.3, ease: 'power2.inOut' }, 0.52);
      return t;
    },
  arrow_downward: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { scaleY: 0, transformOrigin: '50% 0%', opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.42, ease: 'power3.out' }, 0)
        .fromTo(r.querySelector('.hd'), { y: -7, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, 0.08)
        .to(r, { y: 2.2, duration: 0.18 }, 0.34).to(r, { y: 0, duration: 0.3, ease: 'power2.inOut' }, 0.52);
      return t;
    },
  arrow_forward: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { scaleX: 0, transformOrigin: '0% 50%', opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.42, ease: 'power3.out' }, 0)
        .fromTo(r.querySelector('.hd'), { x: -7, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, 0.08)
        .to(r, { x: 2.2, duration: 0.18, ease: 'power2.out' }, 0.34).to(r, { x: 0, duration: 0.3, ease: 'power2.inOut' }, 0.52);
      return t;
    },
  arrow_motion: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.sh'), { scaleX: 0, transformOrigin: '0% 50%', opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }, 0); inx(g, t, r.querySelector('.hd'), -6, 0.08); draw(g, t, r.querySelector('.mo'), 0.3, 0.26); t.to(r, { x: 2.4, duration: 0.2 }, 0.4).to(r, { x: 0, duration: 0.3, ease: 'power2.inOut' }, 0.6); return t; }
  },
  arrow_upward: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { scaleY: 0, transformOrigin: '50% 100%', opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.42, ease: 'power3.out' }, 0)
        .fromTo(r.querySelector('.hd'), { y: 7, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, 0.08)
        .to(r, { y: -2.2, duration: 0.18 }, 0.34).to(r, { y: 0, duration: 0.3, ease: 'power2.inOut' }, 0.52);
      return t;
    },
  award_medal: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.md'), { scale: 0.55, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.2)' }, 0);
      draw(g, t, r.querySelector('.rib'), 0.5, 0.16);
      pop(g, t, r.querySelector('.star'), 0.3, 0.2);
      return t;
    },
  badge_check: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.bd'), { rotate: -24, scale: 0.6, opacity: 0, transformOrigin: '50% 50%' }, { rotate: 0, scale: 1, opacity: 1, duration: 0.66, ease: 'back.out(2)' }, 0); draw(g, t, r.querySelector('.t'), 0.4, 0.3); return t; }
  },,
  bank: function(g,r){ const t = g.timeline({ paused: true }); drop(g, t, r.querySelector('.rf'), 0); draw(g, t, r.querySelector('.col'), 0.4, 0.2); draw(g, t, r.querySelector('.bs'), 0.35, 0.36); return t; }
  },,
  bar_chart: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.ax'), 0.35, 0); ['.b1', '.b2', '.b3'].forEach((s, i) => grow(g, t, r.querySelector(s), 0.16 + i * 0.09)); pop(g, t, r.querySelector('.spark'), 0.46, 0.2); return t; }
  },,
  bell_ringing: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.bl'), { rotate: -13, transformOrigin: '50% 12%' }, { rotate: 0, duration: 0.85, ease: 'elastic.out(1.2,0.35)' }, 0); draw(g, t, r.querySelector('.cl'), 0.26, 0.2); draw(g, t, r.querySelector('.w1'), 0.4, 0.22); t.to(r.querySelector('.w1'), { opacity: 0.35, duration: 0.3, yoyo: true, repeat: 1 }, 0.55); return t; }
  },,
  bolt: function(g,r){ const t = g.timeline({ paused: true }); const b = r.querySelector('.bt'); draw(g, t, b, 0.5, 0); t.fromTo(b, { opacity: 0.2 }, { opacity: 1, duration: 0.18, ease: 'none' }, 0.34).to(b, { opacity: 0.45, duration: 0.1, yoyo: true, repeat: 3 }, 0.5); return t; }
  },,
  box: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.bx'), 0, 0.6); t.fromTo(r.querySelector('.lid'), { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(2.4)' }, 0.14); draw(g, t, r.querySelector('.hd'), 0.3, 0.36); return t; }
  },,
  bug: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.bd'), 0, 0.5); draw(g, t, r.querySelector('.lg'), 0.45, 0.16); t.to(r.querySelector('.lg'), { rotate: 3, transformOrigin: '50% 50%', duration: 0.16, yoyo: true, repeat: 3, ease: 'sine.inOut' }, 0.5); return t; }
  },,
  cable: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cd'), 0.7, 0.1); pop(g, t, r.querySelector('.p1'), 0, 0.5); pop(g, t, r.querySelector('.p2'), 0.6, 0.5); return t; }
  },,
  calculator: function(g,r){
      const t = g.timeline({ paused: true });
      pop(g, t, r.querySelector('.bd'), 0, 0.7);
      draw(g, t, r.querySelector('.dsp'), 0.4, 0.14);
      r.querySelectorAll('.k').forEach((k, i) => t.fromTo(k, { opacity: 0, scale: 0.5, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.28, ease: 'back.out(3)' }, 0.2 + i * 0.05));
      return t;
    },
  call: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.rc'), { rotate: -14, transformOrigin: '30% 70%' }, { rotate: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' }, 0);
      [['.w2', 0.12], ['.w1', 0.22]].forEach(([s, at]) => t.fromTo(r.querySelector(s), { scale: 0.5, opacity: 0, transformOrigin: '20% 80%' }, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }, at)
        .to(r.querySelector(s), { opacity: 0.35, duration: 0.35, yoyo: true, repeat: 1 }, at + 0.42));
      return t;
    },
  call_blocked: function(g,r){ const t = g.timeline({ paused: true }); const rc = r.querySelector('.rc');
      t.fromTo(rc, { scale: 0.78, opacity: 0, transformOrigin: '25% 75%' }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2.4)' }, 0)
       .to(rc, { rotate: -8, transformOrigin: '25% 75%', duration: 0.1, yoyo: true, repeat: 3, ease: 'sine.inOut' }, 0.3);
      pop(g, t, r.querySelector('.ring'), 0.66, 0.4);
      draw(g, t, r.querySelector('.sl'), 0.22, 0.82);
      t.to(rc, { opacity: 0.45, duration: 0.2 }, 0.86).to(rc, { opacity: 1, duration: 0.3 }, 1.1);
      return t; },
  cart: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.bs'), 0.6, 0); flick(g, t, r.querySelectorAll('.wh'), 0.34); t.to(r, { x: 2, duration: 0.2, yoyo: true, repeat: 1 }, 0.56); return t; }
  },,
  chart_line: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.ax'), 0.45, 0);
      draw(g, t, r.querySelector('.ln'), 0.6, 0.18);
      pop(g, t, r.querySelector('.dot'), 0.66, 0.2);
      return t;
    },
  checklist: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.pg'), 0.55, 0); draw(g, t, r.querySelectorAll('.ln'), 0.3, 0.22); draw(g, t, r.querySelector('.t'), 0.36, 0.44); return t; }
  },,
  chevron_down: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.ch'), 0.45, 0);
      t.fromTo(r, { y: -3 }, { y: 0, duration: 0.55, ease: 'back.out(2.6)' }, 0.1);
      return t;
    },
  city_buildings: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.bd'), 0.6, 0);
      r.querySelectorAll('.w').forEach((w, i) => t.fromTo(w, { opacity: 0, scale: 0.4, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(3)' }, 0.24 + i * 0.08));
      return t;
    },
  close: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.a'), 0.34, 0);
      draw(g, t, r.querySelector('.b'), 0.34, 0.12);
      return t;
    },
  cloud: function(g,r){ const t = g.timeline({ paused: true }); const c = r.querySelector('.cl'); draw(g, t, c, 0.6, 0); t.fromTo(c, { x: -3 }, { x: 0, duration: 0.7, ease: 'power2.out' }, 0.1); return t; }
  },,
  cloud_done: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cl'), 0.55, 0); draw(g, t, r.querySelector('.t'), 0.4, 0.3); return t; }
  },,
  cloud_download: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cl'), 0.5, 0); t.fromTo(r.querySelector('.dn'), { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'back.out(2.2)' }, 0.22); return t; }
  },,
  cloud_off: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cl'), 0.55, 0); draw(g, t, r.querySelector('.sl'), 0.36, 0.3); return t; }
  },,
  cloud_sync: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cl'), 0.5, 0); t.fromTo(r.querySelector('.rot'), { rotate: -180, opacity: 0, transformOrigin: '52% 55%' }, { rotate: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.2); return t; }
  },,
  cloud_upload: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cl'), 0.5, 0); t.fromTo(r.querySelector('.up'), { y: 5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'back.out(2.2)' }, 0.22); return t; }
  },,
  coin_stack: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.cn3'), { y: 5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.8)' }, 0)
      .fromTo(r.querySelector('.cn2'), { y: 5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.8)' }, 0.12)
      .fromTo(r.querySelector('.cn'), { y: -6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(2.4)' }, 0.24); return t; },
  compass: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.cp'), 0.5, 0); draw(g, t, r.querySelector('.ac'), 0.45, 0.28); return t; }
  },,
  crane: function(g,r){ const t = g.timeline({ paused: true }); grow(g, t, r.querySelector('.mast'), 0); draw(g, t, r.querySelector('.base'), 0.24, 0.3);
      t.fromTo(r.querySelector('.jib'), { scaleX: 0, transformOrigin: '21% 50%', opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }, 0.22);
      draw(g, t, r.querySelector('.brace'), 0.3, 0.4);
      t.fromTo(r.querySelector('.line'), { scaleY: 0, transformOrigin: '50% 0%', opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.45, ease: 'power2.in' }, 0.5)
       .fromTo(r.querySelector('.hook'), { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(2.2)' }, 0.6);
      return t; },
  credit_cards: function(g,r){ const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.back'), { x: 3, y: 3, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }, 0)
       .fromTo(r.querySelector('.front'), { x: -4, y: 4, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.8)' }, 0.1);
      draw(g, t, r.querySelector('.stripe'), 0.4, 0.34); pop(g, t, r.querySelector('.chip'), 0.44, 0.5); return t; },
  cursor_click: function(g,r){ const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.cur'), { scale: 0.6, opacity: 0, transformOrigin: '15% 15%' }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.4)' }, 0.1)
       .to(r.querySelector('.cur'), { scale: 0.9, transformOrigin: '15% 15%', duration: 0.14, yoyo: true, repeat: 1 }, 0.5);
      ['.r2', '.r1'].forEach((sel, i) => { draw(g, t, r.querySelector(sel), 0.34, 0.5 + i * 0.1); t.to(r.querySelector(sel), { opacity: 0.3, duration: 0.28, yoyo: true, repeat: 1 }, 0.86 + i * 0.1); });
      return t; },
  devices: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.mn'), 0, 0.6); draw(g, t, r.querySelector('.st'), 0.28, 0.2); pop(g, t, r.querySelector('.ph'), 0.24, 0.5); return t; }
  },,
  diamond: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.crown'), 0.45, 0); draw(g, t, r.querySelector('.pav'), 0.5, 0.14);
      draw(g, t, r.querySelector('.fct'), 0.5, 0.3); t.to(r.querySelector('.fct'), { opacity: 0.35, duration: 0.3, yoyo: true, repeat: 1 }, 0.7); return t; },
  document: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.pg'), 0.55, 0);
      draw(g, t, r.querySelector('.fold'), 0.3, 0.3);
      draw(g, t, r.querySelectorAll('.ln'), 0.32, 0.34);
      return t;
    },
  double_check: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.t1'), 0.44, 0);
      draw(g, t, r.querySelector('.t2'), 0.44, 0.14);
      return t;
    },
  edit_lines: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelectorAll('.ln'), 0.32, 0); t.fromTo(r.querySelector('.pn'), { x: 4, y: 4, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, 0.24).to(r.querySelector('.pn'), { x: -1.6, y: 1.6, duration: 0.22, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0.62); return t; }
  },,
  empty_battery: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.cap'), 0, 0.5); draw(g, t, r.querySelector('.cell'), 0.5, 0.08);
      t.fromTo(r.querySelector('.fill'), { scaleY: 5.6, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.75, ease: 'power2.inOut' }, 0.24)
       .to(r.querySelector('.fill'), { opacity: 0.35, duration: 0.24, yoyo: true, repeat: 3 }, 0.9); return t; },
  factory: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.bd'), 0.6, 0); grow(g, t, r.querySelector('.ch'), 0.18);
      Array.from(r.querySelectorAll('.sm')).forEach((c, i) => t.fromTo(c, { y: 4, scale: 0.4, opacity: 0, transformOrigin: '50% 50%' }, { y: -2.6, scale: 1.2, opacity: 1, duration: 0.8, ease: 'power1.out' }, 0.3 + i * 0.2).to(c, { opacity: 0, duration: 0.3 }, 0.95 + i * 0.2));
      return t; },
  flag: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.pole'), 0.4, 0);
      t.fromTo(r.querySelector('.fl'), { scaleX: 0, opacity: 0, transformOrigin: '0% 50%' }, { scaleX: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.6)' }, 0.16)
        .to(r.querySelector('.fl'), { skewY: -4, duration: 0.22, transformOrigin: '0% 50%', yoyo: true, repeat: 3, ease: 'sine.inOut' }, 0.56);
      return t;
    },
  folder_person: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.fd'), 0.6, 0); pop(g, t, r.querySelector('.hd'), 0.28, 0.3); grow(g, t, r.querySelector('.bd'), 0.36); return t; }
  },,
  fork_knife: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.fork'), { x: -3, rotate: -8, opacity: 0, transformOrigin: '50% 100%' }, { x: 0, rotate: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.8)' }, 0); draw(g, t, r.querySelector('.ft'), 0.3, 0.22); t.fromTo(r.querySelector('.knife'), { x: 3, rotate: 8, opacity: 0, transformOrigin: '50% 100%' }, { x: 0, rotate: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.8)' }, 0.06); return t; }
  },,
  full_battery: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.cap'), 0, 0.5); draw(g, t, r.querySelector('.cell'), 0.5, 0.08);
      t.fromTo(r.querySelector('.fill'), { scaleY: 0, opacity: 0, transformOrigin: '50% 100%' }, { scaleY: 1, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.26); return t; },
  gavel: function(g,r){ const t = g.timeline({ paused: true }); const head = [r.querySelector('.hm'), r.querySelector('.hd'), r.querySelector('.grip')];
      draw(g, t, r.querySelector('.bl'), 0.3, 0); draw(g, t, r.querySelector('.st'), 0.24, 0.12);
      t.fromTo(head, { rotate: -24, opacity: 0, transformOrigin: '25% 80%' }, { rotate: 0, opacity: 1, duration: 0.44, ease: 'power3.in' }, 0.18)
       .to(head, { rotate: 8, transformOrigin: '25% 80%', duration: 0.12, yoyo: true, repeat: 1, ease: 'power2.out' }, 0.62);
      flick(g, t, r.querySelectorAll('.imp'), 0.68, 0.04);
      t.to(r.querySelectorAll('.imp'), { opacity: 0, duration: 0.3 }, 0.98);
      return t; },
  gear: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.rim'), { rotate: -46, scale: 0.7, opacity: 0, transformOrigin: '50% 50%' }, { rotate: 0, scale: 1, opacity: 1, duration: 0.85, ease: 'back.out(1.5)' }, 0);
      pop(g, t, r.querySelector('.hub'), 0.34, 0.3); return t; },
  grad_cap: function(g,r){ const t = g.timeline({ paused: true }); drop(g, t, r.querySelector('.cap'), 0); draw(g, t, r.querySelector('.bk'), 0.45, 0.2); t.fromTo(r.querySelector('.tassel'), { rotate: -22, transformOrigin: '50% 0%', opacity: 0 }, { rotate: 0, opacity: 1, duration: 0.9, ease: 'elastic.out(1.2,0.35)' }, 0.24); return t; }
  },,
  headset: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.hs'), 0.5, 0); flick(g, t, r.querySelectorAll('.er'), 0.24); draw(g, t, r.querySelector('.mic'), 0.32, 0.36); t.to(r, { rotate: -5, transformOrigin: '50% 60%', duration: 0.25, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0.5); return t; }
  },,
  health_and_safety: function(g,r){ const t = g.timeline({ paused: true }); drop(g, t, r.querySelector('.sh'), 0); draw(g, t, r.querySelector('.cr'), 0.4, 0.24); return t; }
  },,
  history: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.rot'), 0.6, 0); draw(g, t, r.querySelector('.ar'), 0.3, 0.28); t.fromTo(r.querySelector('.hn'), { rotate: -110, opacity: 0, transformOrigin: '12px 12px' }, { rotate: 0, opacity: 1, duration: 0.75, ease: 'back.out(1.4)' }, 0.24); return t; }
  },,
  hub_spokes: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.hub'), 0, 0.4); draw(g, t, r.querySelector('.sp'), 0.45, 0.14); flick(g, t, r.querySelectorAll('.n'), 0.3, 0.06); return t; }
  },,
  id_card: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.cd'), 0, 0.6); pop(g, t, r.querySelector('.tb'), 0.16, 0.4); pop(g, t, r.querySelector('.hd'), 0.24, 0.3); draw(g, t, r.querySelectorAll('.ln'), 0.28, 0.3); return t; }
  },,
  invoice: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.pg'), 0.55, 0); draw(g, t, r.querySelector('.fold'), 0.28, 0.28); draw(g, t, r.querySelector('.bar'), 0.3, 0.32); draw(g, t, r.querySelector('.cur'), 0.5, 0.36); return t; }
  },,
  key: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.hd'), 0, 0.4); draw(g, t, r.querySelector('.key'), 0.4, 0.18); flick(g, t, r.querySelectorAll('.tth'), 0.42); return t; }
  },,
  lock: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sk'), { attr: { d: LOCK_OPEN_SHACKLE }, y: -2 }, { attr: { d: LOCK_SHACKLE }, y: 0, duration: 0.55, ease: 'power2.inOut' }, 0.1);
      pop(g, t, r.querySelector('.bd'), 0, 0.55);
      draw(g, t, r.querySelector('.kh'), 0.3, 0.4);
      return t;
    },
  lock_open: function(g,r){
      const t = g.timeline({ paused: true });
      pop(g, t, r.querySelector('.bd'), 0, 0.55);
      t.fromTo(r.querySelector('.sk'), { attr: { d: LOCK_SHACKLE } }, { attr: { d: LOCK_OPEN_SHACKLE }, duration: 0.5, ease: 'power2.inOut' }, 0.16)
        .fromTo(r.querySelector('.sk'), { rotate: 0 }, { rotate: 14, transformOrigin: '100% 100%', duration: 0.4, ease: 'back.out(2)' }, 0.4);
      return t;
    },
  mail: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.bx'), { scaleY: 0.55, opacity: 0, transformOrigin: '50% 100%' }, { scaleY: 1, opacity: 1, duration: 0.45, ease: 'power3.out' }, 0)
        .to(r.querySelector('.fl'), { attr: { d: ENV_OPEN }, duration: 0.42, ease: 'power2.inOut' }, 0.22)
        .to(r.querySelector('.fl'), { attr: { d: ENV_CLOSED }, duration: 0.46, ease: 'power2.inOut' }, 0.78);
      return t;
    },
  mail_open: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.bx'), { scaleY: 0.6, opacity: 0, transformOrigin: '50% 100%' }, { scaleY: 1, opacity: 1, duration: 0.45, ease: 'power3.out' }, 0);
      draw(g, t, r.querySelector('.fl'), 0.5, 0.18);
      return t;
    },
  mail_secure: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.bx'), 0, 0.6); draw(g, t, r.querySelector('.fl'), 0.4, 0.14);
      t.fromTo(r.querySelector('.sk'), { y: -2.4, opacity: 0 }, { y: 0, opacity: 1, duration: 0.42, ease: 'back.out(3)' }, 0.34); pop(g, t, r.querySelector('.lk'), 0.26, 0.5); return t; },
  mindset_bulb: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.hd'), 0.6, 0); draw(g, t, r.querySelector('.bulb'), 0.5, 0.24); draw(g, t, r.querySelector('.base'), 0.22, 0.46);
      t.fromTo(r.querySelector('.bulb'), { opacity: 0.35 }, { opacity: 1, duration: 0.3 }, 0.5); return t; },
  move_between: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.r1'), 0, 0.5); draw(g, t, r.querySelector('.ar'), 0.45, 0.16); pop(g, t, r.querySelector('.r2'), 0.4, 0.5); return t; }
  },,
  network_tree: function(g,r){
      const t = g.timeline({ paused: true });
      pop(g, t, r.querySelector('.hub'), 0, 0.5);
      draw(g, t, r.querySelector('.dr'), 0.5, 0.1);
      r.querySelectorAll('.n').forEach((n, i) => pop(g, t, n, 0.26 + i * 0.07, 0.4));
      return t;
    },
  office_building: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.bd'), 0.6, 0); flick(g, t, r.querySelectorAll('.w'), 0.24); return t; }
  },,
  palette: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.pl'), 0.65, 0); flick(g, t, r.querySelectorAll('.blob'), 0.26); return t; }
  },,
  partner_rings: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.rl'), { x: -6, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.8)' }, 0)
      .fromTo(r.querySelector('.rr'), { x: 6, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.8)' }, 0); pulse(g, t, r, 0.5); return t; },
  peaks_line: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.ln'), 0.6, 0); flick(g, t, r.querySelectorAll('.dt'), 0.32, 0.1); return t; }
  },,
  people: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.pc'), 0, 0.3); pop(g, t, r.querySelector('.pl'), 0.08, 0.3); pop(g, t, r.querySelector('.pr'), 0.14, 0.3); grow(g, t, r.querySelector('.bd'), 0.2); draw(g, t, r.querySelector('.bs'), 0.34, 0.3); return t; }
  },,
  person: function(g,r){
      const t = g.timeline({ paused: true });
      pop(g, t, r.querySelector('.hd'), 0, 0.35);
      t.fromTo(r.querySelector('.sh'), { scaleY: 0.2, y: 4, opacity: 0, transformOrigin: '50% 100%' }, { scaleY: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.8)' }, 0.12);
      return t;
    },
  phishing: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.hk'), 0.5, 0); draw(g, t, r.querySelector('.brb'), 0.2, 0.32); pop(g, t, r.querySelector('.env'), 0.24, 0.6); draw(g, t, r.querySelector('.fl'), 0.34, 0.4); shake(g, t, r.querySelector('.env'), 0.66); return t; }
  },,
  pin: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.pin'), { y: -7, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(2.6)' }, 0);
      pop(g, t, r.querySelector('.dot'), 0.28, 0.3);
      t.fromTo(r.querySelector('.rip'), { scale: 0.3, opacity: 0.9, transformOrigin: '50% 50%' }, { scale: 1.5, opacity: 0, duration: 0.9, ease: 'power2.out' }, 0.34);
      return t;
    },
  prohibited: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.ring'), 0.6, 0); draw(g, t, r.querySelector('.sl'), 0.34, 0.32); return t; }
  },,
  restore: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.rot'), 0.6, 0); draw(g, t, r.querySelector('.ar'), 0.28, 0.3);
      t.fromTo(r.querySelector('.hn'), { rotate: 120, opacity: 0, transformOrigin: '12px 12px' }, { rotate: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' }, 0.26); return t; },
  robot: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.hd'), 0, 0.6); draw(g, t, r.querySelector('.ant'), 0.3, 0.16); pop(g, t, r.querySelector('.antd'), 0.28, 0.2); flick(g, t, r.querySelectorAll('.eye'), 0.3, 0.06); t.to(r.querySelectorAll('.eye'), { scaleY: 0.15, transformOrigin: '50% 50%', duration: 0.1, yoyo: true, repeat: 1 }, 0.7); return t; }
  },,
  robot_arm: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.bs'), 0, 0.6);
      t.fromTo(r.querySelector('.a1'), { rotate: -26, opacity: 0, transformOrigin: '0% 100%' }, { rotate: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.7)' }, 0.12)
       .fromTo(r.querySelector('.a2'), { rotate: 24, opacity: 0, transformOrigin: '0% 100%' }, { rotate: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.7)' }, 0.24);
      pop(g, t, r.querySelector('.gp'), 0.42, 0.5); return t; },
  rollback: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.rot'), 0.55, 0); draw(g, t, r.querySelector('.ar'), 0.28, 0.26); pop(g, t, r.querySelector('.dot'), 0.34, 0.2); return t; }
  },,
  schedule: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.ring'), 0.6, 0); t.fromTo(r.querySelector('.hn'), { rotate: -140, opacity: 0, transformOrigin: '12px 12px' }, { rotate: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }, 0.2); return t; }
  },,
  send: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.pl'), { x: -5, y: 4, opacity: 0, rotate: -12, transformOrigin: '50% 50%' }, { x: 0, y: 0, rotate: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.8)' }, 0);
      draw(g, t, r.querySelector('.cr'), 0.4, 0.24);
      t.to(r, { x: 2.4, y: -2.4, duration: 0.2, ease: 'power2.out' }, 0.5).to(r, { x: 0, y: 0, duration: 0.34, ease: 'power2.inOut' }, 0.7);
      return t;
    },
  server_racks: function(g,r){ const t = g.timeline({ paused: true }); inx(g, t, r.querySelector('.rk'), -6, 0); inx(g, t, r.querySelectorAll('.rk')[1], 6, 0.1); flick(g, t, r.querySelectorAll('.dt'), 0.3, 0.12); t.to(r.querySelectorAll('.dt'), { opacity: 0.3, duration: 0.22, yoyo: true, repeat: 3, stagger: 0.06 }, 0.5); return t; }
  },,
  shield_admin: function(g,r){ const t = g.timeline({ paused: true }); drop(g, t, r.querySelector('.sh'), 0); pop(g, t, r.querySelector('.hd'), 0.24, 0.3); grow(g, t, r.querySelector('.bd'), 0.32); draw(g, t, r.querySelector('.dots'), 0.3, 0.44); return t; }
  },,
  shield_check: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { y: -5, scaleY: 1.1, opacity: 0, transformOrigin: '50% 0%' }, { y: 0, scaleY: 1, opacity: 1, duration: 0.6, ease: 'back.out(2.2)' }, 0);
      draw(g, t, r.querySelector('.t'), 0.4, 0.26);
      return t;
    },
  shield_keyhole: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { y: -5, opacity: 0, transformOrigin: '50% 0%' }, { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(2.2)' }, 0);
      pop(g, t, r.querySelector('.dot'), 0.24, 0.3);
      draw(g, t, r.querySelector('.st'), 0.3, 0.34);
      return t;
    },
  shield_padlock: function(g,r){
      const t = g.timeline({ paused: true });
      t.fromTo(r.querySelector('.sh'), { y: -5, opacity: 0, transformOrigin: '50% 0%' }, { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(2.2)' }, 0)
        .fromTo(r.querySelector('.sk'), { y: -2.4, opacity: 0 }, { y: 0, opacity: 1, duration: 0.42, ease: 'back.out(3)' }, 0.3);
      pop(g, t, r.querySelector('.bd'), 0.22, 0.5);
      return t;
    },
  shield_person: function(g,r){ const t = g.timeline({ paused: true }); drop(g, t, r.querySelector('.sh'), 0); pop(g, t, r.querySelector('.hd'), 0.26, 0.3); grow(g, t, r.querySelector('.bd'), 0.34); return t; }
  },,
  sliders: function(g,r){
      const t = g.timeline({ paused: true });
      draw(g, t, r.querySelector('.rl'), 0.5, 0);
      r.querySelectorAll('.kn').forEach((k, i) => t.fromTo(k, { x: i % 2 ? 6 : -6, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'back.out(2.2)' }, 0.14 + i * 0.08));
      return t;
    },
  speedometer: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.dial'), 0.6, 0); flick(g, t, r.querySelectorAll('.tick'), 0.2, 0.06); pop(g, t, r.querySelector('.hub'), 0.24, 0.3);
      t.fromTo(r.querySelector('.ndl'), { rotate: -78, opacity: 0, transformOrigin: '12px 17px' }, { rotate: 0, opacity: 1, duration: 0.85, ease: 'back.out(1.9)' }, 0.26); return t; },
  sun: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.bd'), 0, 0.4); draw(g, t, r.querySelector('.sp'), 0.5, 0.14); t.fromTo(r, { rotate: -18, transformOrigin: '50% 50%' }, { rotate: 0, duration: 0.9, ease: 'power2.out' }, 0); return t; }
  },,
  swap_horiz: function(g,r){ const t = g.timeline({ paused: true }); inx(g, t, r.querySelector('.a1'), -8, 0); inx(g, t, r.querySelector('.a2'), 8, 0.1); return t; }
  },,
  sync_alt: function(g,r){ const t = g.timeline({ paused: true }); inx(g, t, r.querySelector('.a1'), -8, 0); inx(g, t, r.querySelector('.a2'), 8, 0.1); t.to(r.querySelector('.a1'), { x: 2, duration: 0.2, yoyo: true, repeat: 1 }, 0.44).to(r.querySelector('.a2'), { x: -2, duration: 0.2, yoyo: true, repeat: 1 }, 0.44); return t; }
  },,
  three_circles: function(g,r){ const t = g.timeline({ paused: true }); flick(g, t, r.querySelectorAll('.ws'), 0, 0.09); return t; }
  },,
  trending_up: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.ln'), 0.55, 0); draw(g, t, r.querySelector('.hd'), 0.3, 0.34); t.to(r, { y: -2.4, duration: 0.2, ease: 'power2.out' }, 0.5).to(r, { y: 0, duration: 0.3, ease: 'power2.inOut' }, 0.7); return t; }
  },,
  truck: function(g,r){ const t = g.timeline({ paused: true }); inx(g, t, r.querySelector('.bd'), -7, 0); inx(g, t, r.querySelector('.cb'), -5, 0.08); Array.from(r.querySelectorAll('.wh')).forEach((w, i) => t.fromTo(w, { rotate: -180, opacity: 0, transformOrigin: '50% 50%' }, { rotate: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.14 + i * 0.06)); return t; }
  },,
  warning: function(g,r){ const t = g.timeline({ paused: true }); draw(g, t, r.querySelector('.tri'), 0.55, 0); draw(g, t, r.querySelector('.bar'), 0.3, 0.28); pop(g, t, r.querySelector('.dot'), 0.42, 0.2); shake(g, t, r, 0.5); return t; }
  },,
  wifi: function(g,r){ const t = g.timeline({ paused: true }); pop(g, t, r.querySelector('.dot'), 0, 0.3); ['.w1', '.w2', '.w3'].forEach((s, i) => { draw(g, t, r.querySelector(s), 0.34, 0.12 + i * 0.1); t.fromTo(r.querySelector(s), { opacity: 0.25 }, { opacity: 1, duration: 0.3 }, 0.12 + i * 0.1); }); return t; }
  },,
  wrench: function(g,r){ const t = g.timeline({ paused: true }); t.fromTo(r.querySelector('.wr'), { rotate: -32, opacity: 0, transformOrigin: '30% 70%' }, { rotate: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' }, 0)
      .to(r, { rotate: -9, transformOrigin: '25% 75%', duration: 0.18, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 0.6); return t; }
  };

  window.PTG_ICONS = {
    names: Object.keys(BODIES).sort(),
    markup: function(name){ return BODIES[name] ? S(BODIES[name]) : ''; },
    timeline: function(name, g, r){ return TIMELINES[name] ? TIMELINES[name](g, r) : null; },
    _draw: draw,
    _pop: pop
  };
})();
