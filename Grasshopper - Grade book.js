function getGrade (s1, s2, s3) {
    let av = (s1 + s2 + s3)/3;
    if (90 <= av && av <=100) {
        return "A";
    }else if(80 <= av && av < 90){
        return "B";
    }else if(70 <= av && av < 80){
        return "C";
    }else if(60 <= av && av < 70){
        return "D";
    }else if(0 <= av && av < 60){
        return "F";
    }

}