function sch(){
    let __d = new Date(2018, 10, 29);
    let y = __d.getFullYear();
    let _m = __d.getMonth()+1;
    let _d = __d.getDate();
    let dayOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) dayOfMonth[2] = 29;
    let m = _m; if (m < 10) m = "0" + m.toString();
    let d = _d; if (d < 10) d = "0" + d.toString();
    let nextDay = d+1; if (nextDay < 10) nextDay = "0" + nextDay.toString();
    const daySplit = "<em>" + d + "</em>";
    let nextSplit = "<em>" + nextDay + "</em>";
    if (parseInt(nextDay) > dayOfMonth[parseInt(y)]) nextSplit = "</div>";
    let str_url = "https://stu.sen.go.kr/sts_sci_sf01_001.do?schulCode=B100000658&schulCrseScCode=4&schulKndScCode=04&ay=" + y + "&mm=" + m;
    let final = "";
    $.ajax({
        url: str_url,
        success: function(fullHtml){
            try {
                let daySchedule = fullHtml.split(daySplit)[1].split(nextSplit)[0];
                let dayScheduleSplit1 = daySchedule.split("<strong>");
                for (let i = 1; i < dayScheduleSplit1.length; i++) {
                    final += dayScheduleSplit1[i].split("</strong>")[0] + "\n";
                }
            }catch(e){document.write("일정 없음");}
            document.write(final);
        }
    });
}

$(document).ready(function() {
    sch();
} );