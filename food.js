
function food() {
    let _d = new Date(2018, 10, 28);
    let y = _d.getFullYear().toString();
    let m = _d.getMonth() + 1;
    let d = _d.getDate().toString();
    if(m < 10) m = "0" + m.toString();
    else m = m.toString();
    const split1 = "<td><div>" + d + "<br />";
    const split2 = "</div></td>";
    const str_url = "https://stu.sen.go.kr/sts_sci_md00_001.do?schulCode=B100000658&schulCrseScCode=4&schulKndScCode=04&ay=" + y + "&mm=" + m + "&";
    $.ajax({
        url: str_url,
        success: function(code){
            let foodStr;
            try {
                foodStr = code.split(split1)[1];
                foodStr = foodStr.split(split2)[0];
                function replaceAll(str, searchStr, replaceStr) {
                    return str.split(searchStr).join(replaceStr);
                }
                foodStr = foodStr.replace("[석식]", "\n[석식]").replace(/[0-9]+\./g, "");
            }catch(e){document.write("급식 정보가 없습니다.");}

            document.write(foodStr);

            //$('#textvw').val(data);
        }
    });
}

$(document).ready(function() {
    food();
} );