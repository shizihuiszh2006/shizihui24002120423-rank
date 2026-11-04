/* ============================================================
   作者：石子卉  学号：423
   说明：新闻排行榜交互脚本 —— 选项卡切换 + 列表渲染
   规范：所有 JS 变量 / 函数名均以 szh_ 开头
   ============================================================ */

// 石子卉 423 点击排行数据（与效果图一一对应）
var szh_click_data = [
    { title: "中国各城市房子还要要卖多少年(详细数据)", count: 187706 },
    { title: "任志强：60多年来 我不知道国企给了我们", count: 171180 },
    { title: "三精制药跳楼总经理被查因喜间简陋 省食", count: 127631 },
    { title: "内地17省铺开不动产统一登记职责整合工作", count: 113865 },
    { title: "山西煤老板抛售整栋99套二手专房 8年投资翻", count: 72770 },
    { title: "北京城南楼市“论跑”变相降价措施加码", count: 82971 },
    { title: "中国3D打印技术取得重大突破 近1200人连", count: 27456 },
    { title: "重磅利空突至全球暴跌 A股或黑周五无疑", count: 25322 },
    { title: "七匹狼早盘上演奇葩一幕：单笔4手买单刷", count: 20912 },
    { title: "长油小股东东导躲东大会 当场煤料董事长", count: 11667 }
];

// 石子卉 423 评论排行数据（第二个选项卡内容）
var szh_comment_data = [
    { title: "三精制药跳楼总经理被查因喜间简陋 省食", count: 9625 },
    { title: "任志强：60多年来 我不知道国企给了我们", count: 8814 },
    { title: "中国各城市房子还要要卖多少年(详细数据)", count: 7603 },
    { title: "北京城南楼市“论跑”变相降价措施加码", count: 6418 },
    { title: "内地17省铺开不动产统一登记职责整合工作", count: 5377 },
    { title: "重磅利空突至全球暴跌 A股或黑周五无疑", count: 4216 },
    { title: "山西煤老板抛售整栋99套二手专房 8年投资翻", count: 3450 },
    { title: "七匹狼早盘上演奇葩一幕：单笔4手买单刷", count: 2733 },
    { title: "中国3D打印技术取得重大突破 近1200人连", count: 1852 },
    { title: "长油小股东东导躲东大会 当场煤料董事长", count: 964 }
];

// 石子卉 423 获取排行列表容器
var szh_rank_list = document.getElementById("szh_rank_list");

// 石子卉 423 获取两个选项卡元素
var szh_tab_click = document.getElementById("szh_tab_click");
var szh_tab_comment = document.getElementById("szh_tab_comment");

/* 石子卉 423 渲染排行榜列表：data 为数据数组 */
function szh_render_list(data) {
    var szh_html = "";
    for (var szh_i = 0; szh_i < data.length; szh_i++) {
        var szh_item = data[szh_i];
        // 石子卉 423 前三名序号加橙色样式 szh_rank_top3
        var szh_num_class = (szh_i < 3) ? "szh_rank_num szh_rank_top3" : "szh_rank_num";
        szh_html += '<li class="szh_rank_item">'
            + '<span class="' + szh_num_class + '">' + (szh_i + 1) + '</span>'
            + '<a class="szh_rank_title" href="javascript:;">' + szh_item.title + '</a>'
            + '<span class="szh_rank_count">' + szh_item.count + '</span>'
            + '</li>';
    }
    szh_rank_list.innerHTML = szh_html;
}

/* 石子卉 423 切换选项卡：当前项加 szh_tab_active，另一项移除 */
function szh_switch_tab(szh_active_tab, szh_other_tab, szh_data) {
    szh_active_tab.classList.add("szh_tab_active");
    szh_other_tab.classList.remove("szh_tab_active");
    szh_render_list(szh_data);
}

// 石子卉 423 绑定"点击排行"选项卡点击事件
szh_tab_click.onclick = function () {
    szh_switch_tab(szh_tab_click, szh_tab_comment, szh_click_data);
};

// 石子卉 423 绑定"评论排行"选项卡点击事件
szh_tab_comment.onclick = function () {
    szh_switch_tab(szh_tab_comment, szh_tab_click, szh_comment_data);
};

// 石子卉 423 页面加载后默认渲染"点击排行"
szh_render_list(szh_click_data);
