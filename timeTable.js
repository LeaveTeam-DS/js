Array.prototype.binarySearch = function(value){
    let l = 0, r = this.length-1;
    let mid;
    while(l <= r){
        mid = Math.floor((l+r)/2);
        if(this[mid] === value) break;
        if(this[mid] < value) l = mid+1;
        else r = mid-1;
    }
    return (this[mid] === value ? mid : -1);
};

Array.prototype.lower_bound = function(value){
    let l = 0, r = this.length;
    let mid;
    while(l < r){
        mid = Math.floor((l+r)/2);
        if(value <= this[mid]) r = mid;
        else l = mid+1;
    }
    return r;
};

Array.prototype.upper_bound = function(value){
    let l = 0, r = this.length;
    let mid;
    while(l < r){
        mid = Math.floor((l+r)/2);
        if(value < this[mid]) r = mid;
        else l = mid+1;
    }
    return r;
};

function timeConv(h, m, s){ return h*3600+m*60+s; } //시/분 변환

let timeTable = {
    grade1 : {
        class04 : {
            mon : ["조회", "JAVA", "JAVA", "통사B", "영어A", "컴시일", "국어A", "컴퓨터 구조"],
            tue : ["조회", "연극", "영어B", "디자인 일반", "디자인 일반", "정보통신", "통사A", "수학"],
            wed : ["조회", "국어A", "음악", "자료구조", "자료구조", "체육", "수학", "동아리"],
            thu : ["조회", "컴퓨터 구조", "체육", "컴시일", "컴시일", "수학", "보건", "영어A"],
            fri : ["조회", "정보통신", "정보통신", "국어B", "통사C", "JAVA"]
        },
        class05 : {
            mon : ["조회", "디자인", "디자인", "컴시일", "컴시일",  "통사C", "수학", "보건"],
            tue : ["조회", "수학", "연극", "자바", "자바", "통사B", "정통", "정통"],
            wed : ["조회", "영어A", "수학", "영어B", "컴구", "음악", "국어", "동아리"],
            thu : ["조회", "컴시일", "정통", "통사A", "국어", "컴구", "체육", "자바"],
            fri : ["조회", "국어", "체육", "자료구조", "자료구조", "영어A"]
        },
        class06 : {
            mon : ["조회", "통사A", "체육", "국어A", "수학", "JAVA", "JAVA", "정보통신"],
            tue : ["조회", "컴시일", "컴시일", "국어B", "영어A", "통사C", "체육", "연극"],
            wed : ["조회", "디자인 일반", "디자인 일반", "통사B", "국어A", "컴시일", "JAVA", "동아리"],
            thu : ["조회", "영어B", "컴퓨터 구조", "자료구조", "자료구조", "정보통신", "정보통신", "수학"],
            fri : ["조회", "영어A", "음악", "수학", "컴퓨터 구조", "보건"]
        }
    }
}; //시간표

let timeSlice = [
    timeConv(8, 39, 0), timeConv(9, 30, 0), timeConv(10, 30, 0), timeConv(11, 30, 0), timeConv(12, 30, 0),
    timeConv(14, 10, 0), timeConv(15, 10, 0), timeConv(16, 10, 0)
]; //n교시 범위

function getToday(grade, classroom){
    let dayTable = [null, "mon", "tue", "wed", "thu", "fri", null];
    let now = new Date(2018, 10, 23, 15, 9, 1);
    if(dayTable[now.getDay()] == null) return null;
    grade = grade.toString();
    if(classroom > 10) classroom = classroom.toString();
    else classroom = "0" + classroom.toString();
    let classObj = timeTable["grade" + grade]["class" + classroom];
    return classObj[dayTable[now.getDay()]];
}

function getNow(grade, classroom){
    let today = getToday(grade, classroom);
    console.log(today);
    let d = new Date(2018, 10, 23, 15, 9, 1);
    let nowTime = timeConv(d.getHours(), d.getMinutes(), d.getSeconds());
    console.log(nowTime);
    let idx = timeSlice.lower_bound(nowTime);
    if(idx > 7 || (d.getDay() === 5 && idx > 5)){
        document.write("정규 일과 종료"); return;
    }
    let finaltxt = "현재 시간 : " + today[idx++];
    if(idx <= 7 && !(d.getDay() === 5 && idx > 5)) finaltxt +=  "<br>다음 시간 : " + today[idx++];
    else finaltxt += "<br>다음 시간 : 종례";
    if(idx <= 7 && !(d.getDay() === 5 && idx > 5)) finaltxt += "<br>" + idx + "교시 : " + today[idx++];
    if(idx <= 7 && !(d.getDay() === 5 && idx > 5)) finaltxt += "<br>" + idx + "교시 : " + today[idx++];
    document.write(finaltxt);
}

getNow(1, 5);