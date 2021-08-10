const BlogModel = require('../models/blog.model');
const {
  getBlogListService,
  getBlogHtmlService,
} = require('../services/blog.service');

// @Note: temp API
exports.postAddBlog = async (req, res, next) => {
  try {
    const blog = {
      title: 'Tương lai gần (Be + Going to)',
      desc: 'Đây là thì dùng để diễn tả những dự đoán có cơ sở và chắc chắn xãy ra...',
      html: `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Tương lai gần (Be + Going to)</title><style>html{-webkit-print-color-adjust:exact}*{box-sizing:border-box;-webkit-print-color-adjust:exact}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background-color:var(--bg-color-main)}::-webkit-scrollbar-thumb{background-color:var(--medium-grey)}::-webkit-scrollbar-thumb:hover{background-color:var(--grey)}html,body{margin:0;padding:0}@media only screen{body{margin:2em auto;max-width:900px;color:rgb(55,53,47)}}body{line-height:1.5;white-space:pre-wrap}a,a.visited{color:inherit;text-decoration:underline}.pdf-relative-link-path{font-size:80%;color:#444}h1,h2,h3{letter-spacing:-0.01em;line-height:1.2;font-weight:600;margin-bottom:0}.page-title{font-size:2.5rem;font-weight:700;margin-top:0;margin-bottom:0.75em}h1{font-size:1.875rem;margin-top:1.875rem}h2{font-size:1.5rem;margin-top:1.5rem}h3{font-size:1.25rem;margin-top:1.25rem}.source{border:1px solid #ddd;border-radius:3px;padding:1.5em;word-break:break-all}.callout{border-radius:3px;padding:1rem}figure{margin:1.25em 0;page-break-inside:avoid}figcaption{opacity:0.5;font-size:85%;margin-top:0.5em}mark{background-color:transparent}.indented{padding-left:1.5em}hr{background:transparent;display:block;width:100%;height:1px;visibility:visible;border:none;border-bottom:1px solid rgba(55,53,47,0.09)}img{max-width:100%}@media only print{img{max-height:100vh;object-fit:contain}}@page{margin:1in}.collection-content{font-size:0.875rem}.column-list{display:flex;justify-content:space-between}.column{padding:0 1em}.column:first-child{padding-left:0}.column:last-child{padding-right:0}.table_of_contents-item{display:block;font-size:0.875rem;line-height:1.3;padding:0.125rem}.table_of_contents-indent-1{margin-left:1.5rem}.table_of_contents-indent-2{margin-left:3rem}.table_of_contents-indent-3{margin-left:4.5rem}.table_of_contents-link{text-decoration:none;opacity:0.7;border-bottom:1px solid rgba(55,53,47,0.18)}table,th,td{border:1px solid rgba(55,53,47,0.09);border-collapse:collapse}table{border-left:none;border-right:none}th,td{font-weight:normal;padding:0.25em 0.5em;line-height:1.5;min-height:1.5em;text-align:left}th{color:rgba(55,53,47,0.6)}ol,ul{margin:0;margin-block-start:0.6em;margin-block-end:0.6em}li>ol:first-child,li>ul:first-child{margin-block-start:0.6em}ul>li{list-style:disc}ul.to-do-list{text-indent:-1.7em}ul.to-do-list>li{list-style:none}.to-do-children-checked{text-decoration:line-through;opacity:0.375}ul.toggle>li{list-style:none}ul{padding-inline-start:1.7em}ul>li{padding-left:0.1em}ol{padding-inline-start:1.6em}ol>li{padding-left:0.2em}.mono ol{padding-inline-start:2em}.mono ol>li{text-indent:-0.4em}.toggle{padding-inline-start:0em;list-style-type:none}.toggle>li>details{padding-left:1.7em}.toggle>li>details>summary{margin-left:-1.1em}.selected-value{display:inline-block;padding:0 0.5em;background:rgba(206,205,202,0.5);border-radius:3px;margin-right:0.5em;margin-top:0.3em;margin-bottom:0.3em;white-space:nowrap}.collection-title{display:inline-block;margin-right:1em}time{opacity:0.5}.icon{display:inline-block;max-width:1.2em;max-height:1.2em;text-decoration:none;vertical-align:text-bottom;margin-right:0.5em}img.icon{border-radius:3px}.user-icon{width:1.5em;height:1.5em;border-radius:100%;margin-right:0.5rem}.user-icon-inner{font-size:0.8em}.text-icon{border:1px solid #000;text-align:center}.page-cover-image{display:block;object-fit:cover;width:100%;height:30vh}.page-header-icon{font-size:3rem;margin-bottom:1rem}.page-header-icon-with-cover{margin-top:-0.72em;margin-left:0.07em}.page-header-icon img{border-radius:3px}.link-to-page{margin:1em 0;padding:0;border:none;font-weight:500}p>.user{opacity:0.5}td>.user,td>time{white-space:nowrap}input[type="checkbox"]{transform:scale(1.5);margin-right:0.6em;vertical-align:middle}p{margin-top:0.5em;margin-bottom:0.5em}.image{border:none;margin:1.5em 0;padding:0;border-radius:0;text-align:center}.code,code{background:rgba(135, 131, 120, 0.15);border-radius:3px;padding:0.2em 0.4em;border-radius:3px;font-size:85%;tab-size:2}code{color:#eb5757}.code{padding:1.5em 1em}.code-wrap{white-space:pre-wrap;word-break:break-all}.code>code{background:none;padding:0;font-size:100%;color:inherit}blockquote{font-size:1.25em;margin:1em 0;padding-left:1em;border-left:3px solid rgb(55,53,47)}.bookmark{text-decoration:none;max-height:8em;padding:0;display:flex;width:100%;align-items:stretch}.bookmark-title{font-size:0.85em;overflow:hidden;text-overflow:ellipsis;height:1.75em;white-space:nowrap}.bookmark-text{display:flex;flex-direction:column}.bookmark-info{flex:4 1 180px;padding:12px 14px 14px;display:flex;flex-direction:column;justify-content:space-between}.bookmark-image{width:33%;flex:1 1 180px;display:block;position:relative;object-fit:cover;border-radius:1px}.bookmark-description{color:rgba(55,53,47,0.6);font-size:0.75em;overflow:hidden;max-height:4.5em;word-break:break-word}.bookmark-href{font-size:0.75em;margin-top:0.25em}.sans{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"}.code{font-family:"SFMono-Regular",Menlo,Consolas,"PT Mono","Liberation Mono",Courier,monospace}.serif{font-family:Lyon-Text,Georgia,ui-serif,serif}.mono{font-family:iawriter-mono,Nitti,Menlo,Courier,monospace}.pdf .sans{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol",'Twemoji','Noto Color Emoji','Noto Sans CJK JP'}.pdf:lang(zh-CN) .sans{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol",'Twemoji','Noto Color Emoji','Noto Sans CJK SC'}.pdf:lang(zh-TW) .sans{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol",'Twemoji','Noto Color Emoji','Noto Sans CJK TC'}.pdf:lang(ko-KR) .sans{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol",'Twemoji','Noto Color Emoji','Noto Sans CJK KR'}.pdf .code{font-family:Source Code Pro,"SFMono-Regular",Menlo,Consolas,"PT Mono","Liberation Mono",Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK JP'}.pdf:lang(zh-CN) .code{font-family:Source Code Pro,"SFMono-Regular",Menlo,Consolas,"PT Mono","Liberation Mono",Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK SC'}.pdf:lang(zh-TW) .code{font-family:Source Code Pro,"SFMono-Regular",Menlo,Consolas,"PT Mono","Liberation Mono",Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK TC'}.pdf:lang(ko-KR) .code{font-family:Source Code Pro,"SFMono-Regular",Menlo,Consolas,"PT Mono","Liberation Mono",Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK KR'}.pdf .serif{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,'Twemoji','Noto Color Emoji','Noto Serif CJK JP'}.pdf:lang(zh-CN) .serif{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,'Twemoji','Noto Color Emoji','Noto Serif CJK SC'}.pdf:lang(zh-TW) .serif{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,'Twemoji','Noto Color Emoji','Noto Serif CJK TC'}.pdf:lang(ko-KR) .serif{font-family:PT Serif,Lyon-Text,Georgia,ui-serif,serif,'Twemoji','Noto Color Emoji','Noto Serif CJK KR'}.pdf .mono{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK JP'}.pdf:lang(zh-CN) .mono{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK SC'}.pdf:lang(zh-TW) .mono{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK TC'}.pdf:lang(ko-KR) .mono{font-family:PT Mono,iawriter-mono,Nitti,Menlo,Courier,monospace,'Twemoji','Noto Color Emoji','Noto Sans Mono CJK KR'}.highlight-default{}.highlight-gray{color:rgb(155,154,151)}.highlight-brown{color:rgb(100,71,58)}.highlight-orange{color:rgb(217,115,13)}.highlight-yellow{color:rgb(223,171,1)}.highlight-teal{color:rgb(15,123,108)}.highlight-blue{color:rgb(11,110,153)}.highlight-purple{color:rgb(105,64,165)}.highlight-pink{color:rgb(173,26,114)}.highlight-red{color:rgb(224,62,62)}.highlight-gray_background{background:rgb(235,236,237)}.highlight-brown_background{background:rgb(233,229,227)}.highlight-orange_background{background:rgb(250,235,221)}.highlight-yellow_background{background:rgb(251,243,219)}.highlight-teal_background{background:rgb(221,237,234)}.highlight-blue_background{background:rgb(221,235,241)}.highlight-purple_background{background:rgb(234,228,242)}.highlight-pink_background{background:rgb(244,223,235)}.highlight-red_background{background:rgb(251,228,228)}.block-color-default{color:inherit;fill:inherit}.block-color-gray{color:rgba(55,53,47,0.6);fill:rgba(55,53,47,0.6)}.block-color-brown{color:rgb(100,71,58);fill:rgb(100,71,58)}.block-color-orange{color:rgb(217,115,13);fill:rgb(217,115,13)}.block-color-yellow{color:rgb(223,171,1);fill:rgb(223,171,1)}.block-color-teal{color:rgb(15,123,108);fill:rgb(15,123,108)}.block-color-blue{color:rgb(11,110,153);fill:rgb(11,110,153)}.block-color-purple{color:rgb(105,64,165);fill:rgb(105,64,165)}.block-color-pink{color:rgb(173,26,114);fill:rgb(173,26,114)}.block-color-red{color:rgb(224,62,62);fill:rgb(224,62,62)}.block-color-gray_background{background:rgb(235,236,237)}.block-color-brown_background{background:rgb(233,229,227)}.block-color-orange_background{background:rgb(250,235,221)}.block-color-yellow_background{background:rgb(251,243,219)}.block-color-teal_background{background:rgb(221,237,234)}.block-color-blue_background{background:rgb(221,235,241)}.block-color-purple_background{background:rgb(234,228,242)}.block-color-pink_background{background:rgb(244,223,235)}.block-color-red_background{background:rgb(251,228,228)}.select-value-color-default{background-color:rgba(206,205,202,0.5)}.select-value-color-gray{background-color:rgba(155,154,151,0.4)}.select-value-color-brown{background-color:rgba(140,46,0,0.2)}.select-value-color-orange{background-color:rgba(245,93,0,0.2)}.select-value-color-yellow{background-color:rgba(233,168,0,0.2)}.select-value-color-green{background-color:rgba(0,135,107,0.2)}.select-value-color-blue{background-color:rgba(0,120,223,0.2)}.select-value-color-purple{background-color:rgba(103,36,222,0.2)}.select-value-color-pink{background-color:rgba(221,0,129,0.2)}.select-value-color-red{background-color:rgba(255,0,26,0.2)}.checkbox{display:inline-flex;vertical-align:text-bottom;width:16;height:16;background-size:16px;margin-left:2px;margin-right:5px}.checkbox-on{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E")}.checkbox-off{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E")}</style></head><body><article id="d0c69294-7242-4a24-9ea0-51f4feddd3ad" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">😛</span></div><h1 class="page-title">Tương lai gần (Be + Going to)</h1></header><div class="page-body"><h1 id="7d818a81-c1f4-4937-8df9-ff4b8a1d5e43" class=""><mark class="highlight-orange">✨ Cách dùng (Usage)</mark></h1><ul id="015577d1-7724-4bd0-855e-4fdc47997118" class="bulleted-list"><li>Nói về một điều đã quyết định trước khi nói về nó.<ul id="5fc39029-891c-4093-99ad-5a84a7524f80" class="bulleted-list"><li>I&#x27;m going to learn to C-walk next year.</li></ul><ul id="1993c6d5-946d-48bf-9e48-bfda68e3112e" class="bulleted-list"><li>Khác với will là điều này mình đã nghĩ từ trước và khác với hiện tại tiếp diễn câu trên không phải một kết quả xác định.</li></ul></li></ul><ul id="9eae4cbf-c0bb-45d3-99b5-211744762412" class="bulleted-list"><li>Dùng cho một sự dự đoán như gần như chắc chắn sẽ xãy ra<ul id="65d8c374-1ccb-463a-8b94-c772546245db" class="bulleted-list"><li>It&#x27;s gonna rain soon.</li></ul></li></ul><h1 id="2f5635d8-841e-42d5-9c41-0c39aa55e226" class=""><mark class="highlight-orange">📝Note</mark></h1><p id="01acc3ec-2af7-4ef0-b393-4799d335e679" class="">Trong giao tiếp bình thường, người ta sẽ dùng &quot;Gonna&quot; thay cho &quot;Going to&quot;.</p></div></article></body></html>`,
    };
    await BlogModel.create(blog);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getBlogList = async (req, res, next) => {
  try {
    const blogList = await getBlogListService();
    return res.status(200).json({ blogList });
  } catch (error) {
    console.error('GET BLOG LIST ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getBlogHtml = async (req, res, next) => {
  try {
    const { _id } = req.query;
    if (!Boolean(_id)) {
      return res.status(400).json({ message: 'id không hợp lệ' });
    }

    const blogHtml = await getBlogHtmlService(_id);
    return res.status(200).json({ blogHtml });
  } catch (error) {
    console.error(' ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
