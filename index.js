//  TEST A
//  person_A = [["9.00" , "10.30"], ["12.00" , "13.00"], ["16.00" , "18.00"]]
//  person_A_time_bound = ["9.00", "20.00"]

//  person_B = [["10.00" , "11.30"], ["12.30" , "14.30"], ["14.30" , "15.00"] , ["16.00" , "17.00"]]
//  person_B_time_bound = ["10.00", "18.30"]

//  TEST B
//  person_A = [["9.00" , "11.30"], ["12.30" , "13.30"], ["14.00" , "16.00"]]
//  person_A_time_bound = ["9.00", "20.00"]

//  person_B = [["8.00" , "9.00"], ["9.30" , "10.30"], ["11.00" , "12.00"] , ["15.00" , "16.00"]]
//  person_B_time_bound = ["8.00", "20.00"]

//  TEST C
//  person_A = [["12.00" , "13.00"], ["13.00" , "14.00"], ["16.00" , "18.00"]]
//  person_A_time_bound = ["8.00", "20.00"]

//  person_B = [["8.00" , "9.30"], ["10.00" , "12.00"], ["13.00" , "14.30"] , ["15.00" , "16.00"]]
//  person_B_time_bound = ["7.00", "18.00"]

//  TEST D
//  person_A = [["11.00" , "12.00"], ["12.00" , "13.00"], ["13.00" , "14.00"] , ["15.00" , "16.30"] , ["17.00" , "18.00"]]
//  person_A_time_bound = ["9.00", "18.00"]

//  person_B = [["12.00" , "13.00"], ["13.00" , "14.00"], ["14.00" , "15.00"] , ["15.00" , "16.00"] , ["16.00" , "18.00"]]
//  person_B_time_bound = ["9.00", "18.00"]

//  TEST E
// let person_A = [["10.30" , "12.00"], ["18.00" , "19.30"]]
// let person_A_time_bound = ["9.00", "20.00"]

// let person_B = [["16.00" , "17.30"], ["17.30" , "19.00"]]
// let person_B_time_bound = ["9.00", "20.00"]

// TEST A _ JS
let person_A = []
let person_A_time_bound = []

let person_A_time_bound_slice = []

let person_B = []
let person_B_time_bound = []

let person_B_time_bound_slice = []


let person_A_free_time = []
let person_B_free_time = []

let available_time = []



function getFreeTime(person , person_x){

    if (person_x == "person_a"){
        let interval = parseFloat(person_A[0][0]) - parseFloat(person_A_time_bound[0])
        interval = interval.toFixed(2)

        if (interval != 0.0){
            let start_time_bound = parseFloat(person_A_time_bound[0])

            while(start_time_bound != parseFloat(person_A[0][0])){
                if (start_time_bound + 0.70 == parseFloat(person_A[0][0])){
                    let free = [start_time_bound.toString() , (start_time_bound + 0.70).toString()]
                    // console.log(free)
                    person_A_free_time.push(free)
                    start_time_bound += 0.70
                }

                else if (start_time_bound + 0.30 == parseFloat(person_A[0][0])){
                    let free = [start_time_bound.toString() , (start_time_bound + 0.30).toString()]
                    // console.log(free)
                    person_A_free_time.push(free)
                    start_time_bound += 0.30
                }

                else{
                    let free = [start_time_bound.toString() , (start_time_bound + 1.0).toString()]
                    // console.log(free)
                    person_A_free_time.push(free)
                    start_time_bound += 1.00
                }
            }
        }
    }

    if (person_x == "person_b"){
        let interval = parseFloat(person_B[0][0]) - parseFloat(person_B_time_bound[0])
        interval = interval.toFixed(2)

        if (interval != 0.0){
            let start_time_bound = parseFloat(person_B_time_bound[0])

            while(start_time_bound != parseFloat(person_B[0][0])){
                if (start_time_bound + 0.70 == parseFloat(person_B[0][0])){
                    let free = [start_time_bound.toString() , (start_time_bound + 0.70).toString()]
                    person_B_free_time.push(free)
                    start_time_bound += 0.70
                }

                else if (start_time_bound + 0.30 == parseFloat(person_B[0][0])){
                    let free = [start_time_bound.toString() , (start_time_bound + 0.30).toString()]
                    person_B_free_time.push(free)
                    start_time_bound += 0.30
                }

                else{
                    let free = [start_time_bound.toString() , (start_time_bound + 1.0).toString()]
                    person_B_free_time.push(free)
                    start_time_bound += 1.00
                }
            }
        }
    }

    let start , end

    for(let i = 0; i < person.length; i++){
        start = person[i][0]

        if (start != null && end != null){
            if (parseFloat(end) + + 0.30 <= parseFloat(start)){
                let free = []

                let interval_end_start = parseFloat(start) - parseFloat(end)

                if (interval_end_start >= 2.00){

                    let current_free = parseFloat(end)
                    let temp_free = 0.0
                    while (current_free != parseFloat(start)){
                        if (current_free + 1.00 <= parseFloat(start)){
                            temp_free = current_free + 1.00
                            if (person_x == "person_a"){
                                person_A_free_time.push([current_free.toString() + ".00" , temp_free.toString() + ".00"])
                            }
                            else if (person_x == "person_b"){
                                person_B_free_time.push([current_free.toString() + ".00" , temp_free.toString() + ".00"])
                            }
                        }
                        else{
                            let check_time = current_free % 1
                            check_time = check_time.toFixed(2)
                            if (check_time == 0.30){
                                temp_free = current_free + 0.70
                                if (person_x == "person_a"){

                                    person_A_free_time.push([current_free.toString() , temp_free.toString()])
                                }
                                else if (person_x == "person_b"){
                                    person_B_free_time.push([current_free.toString() , temp_free.toString()])
                                }
                            }
                            else if (check_time == 0.70){
                                temp_free = current_free + 0.30
                                if (person_x == "person_a"){

                                    person_A_free_time.push([current_free.toString() , temp_free.toString()])
                                }
                                else if (person_x == "person_b"){
                                    person_B_free_time.push([current_free.toString() , temp_free.toString()])
                                }
                            }
                        }
                        current_free = temp_free
                    }
                }

                else{
                    free = [end , start]
                    if (person_x == "person_a"){
                        person_A_free_time.push(free)
                    }
                    else if (person_x == "person_b"){
                        person_B_free_time.push(free)
                    }
                }
            }
        }

        end = person[i][1]
    }

    if (person_x == "person_a"){
        if (parseFloat(person_A_time_bound[1]) > parseFloat(end)){ 
            let temp_interval = parseFloat(person_A_time_bound[1]) - parseFloat(end)
            if (temp_interval >= 2.00){
                    
                let current_free = parseFloat(end)

                while (current_free != parseFloat(person_A_time_bound[1])){
    
                    if (current_free + 1.00 <= parseFloat(person_A_time_bound[1])){
                        temp_free = current_free + 1.00
                        person_A_free_time.push([current_free.toString() + ".00"  , temp_free.toString() + ".00"])
                    }
                    else{
                        check_time = current_free % 1
                        check_time = check_time.toFixed(2)
                        if (check_time == 0.30){
                            temp_free = current_free + 0.70
                            person_A_free_time.push([current_free.toString()  , temp_free.toString()])
                        }
                        else if(check_time == 0.70){
                            temp_free = current_free + 0.30
                            person_A_free_time.push([current_free.toString()  , temp_free.toString()])
                        }
                    }
                    current_free = temp_free 
                }
            }
            else{
                person_A_free_time.push([end , person_A_time_bound[1]])
            }
        }
    }

    if (person_x == "person_b"){
        if (parseFloat(person_B_time_bound[1]) > parseFloat(end)){ 
            let temp_interval = parseFloat(person_B_time_bound[1]) - parseFloat(end)
            if (temp_interval >= 2.00){
                    
                let current_free = parseFloat(end)

                while (current_free != parseFloat(person_B_time_bound[1])){
    
                    if (current_free + 1.00 <= parseFloat(person_B_time_bound[1])){
                        temp_free = current_free + 1.00
                        person_B_free_time.push([current_free.toString() + ".00" , temp_free.toString() + ".00"])
                    }
                    else{
                        check_time = current_free % 1
                        check_time = check_time.toFixed(2)
                        if (check_time == 0.30){
                            temp_free = current_free + 0.70
                            person_B_free_time.push([current_free.toString()  , temp_free.toString()])
                        }
                        else if(check_time == 0.70){
                            temp_free = current_free + 0.30
                            person_B_free_time.push([current_free.toString()  , temp_free.toString()])
                        }
                    }
                    current_free = temp_free 
                }
            }
            else{
                person_B_free_time.push([end , person_B_time_bound[1]])
            }
        }
    }
}

function getAvailableTime(){
    getFreeTime(person_A, "person_a")
    console.log(person_A_free_time)

    getFreeTime(person_B, "person_b")
    console.log(person_B_free_time)

    console.log()

    for(let i = 0; i < person_A_free_time.length; i++){
        for(let j = 0; j < person_B_free_time.length; j++){
            //  get the END from person_A_free_time , then get the START from person_B_free_time
            //  print(person_A_free_time[i][1])
            //  print(person_A_free_time[i][1] , " >= " ,person_B_free_time[j][0] )
            if (parseFloat(person_A_free_time[i][1]) >= parseFloat(person_B_free_time[j][0]) && parseFloat(person_A_free_time[i][1]) <= parseFloat(person_B_free_time[j][1])){

                //  print("here a")
                let interval_from_start = parseFloat(person_A_free_time[i][1]) - parseFloat(person_B_free_time[j][0])
                interval_from_start = interval_from_start.toFixed(2)
                
                //  print(interval_from_start)
                if (interval_from_start == 0.30 || interval_from_start == 0.70){
                    //  print("here b")
                    let free = [person_B_free_time[j][0] , person_A_free_time[i][1]]
                    //  print(free)
                    available_time.push(free)
                }
                else if (interval_from_start == 1.00 && parseFloat(person_A_free_time[i][1]) != parseFloat(person_B_free_time[j][1])){
                    //  print("here b")
                    let free = [person_B_free_time[j][0] , person_A_free_time[i][1]]
                    //  print(free)
                    available_time.push(free)
                }
                else if (parseFloat(person_B_free_time[j][1]) < parseFloat(person_A_free_time[i][1])){
                    //  print("here c")
                    let free = [person_B_free_time[j][0] , person_B_free_time[i][1]]
                    //  print(free)
                    available_time.push(free)
                }
            }
            //  get the START from person_A_free_time , then get the END from person_B_free_time
            //  print(person_A_free_time[i][0] , " >= " ,person_B_free_time[j][0] )
            if (parseFloat(person_A_free_time[i][0]) >= parseFloat(person_B_free_time[j][0]) && parseFloat(person_A_free_time[i][0]) <= parseFloat(person_B_free_time[j][1])){
                //  print("here main")
                let interval_from_end = parseFloat(person_B_free_time[j][1]) - parseFloat(person_A_free_time[i][0])
                interval_from_end = interval_from_end.toFixed(2)

                if (interval_from_end == 0.30 || interval_from_end == 0.70){
                    //  print("here a")
                    let free = [person_A_free_time[i][0] , person_B_free_time[j][1]]
                    //  print(free)
                    available_time.push(free)
                }

                else if (interval_from_end == 1.00){
                    //  print("here b")
                    let free = [person_A_free_time[i][0] , person_B_free_time[j][1]]
                    //  print(free)
                    available_time.push(free)
                }
                else if (parseFloat(person_B_free_time[j][1]) > parseFloat(person_A_free_time[i][0])){
                    //  print("here c")
                    let free = [person_A_free_time[i][0] , person_A_free_time[i][1]]
                    //  print(free)
                    available_time.push(free)
                }
            }
        }
    }
    let temp_available_time = []
    for (elem of available_time){
        let temp = [parseFloat(elem[0]) , parseFloat(elem[1])]
        if (!temp_available_time.includes(temp)){
            temp_available_time.push(temp)
        }
    }

    console.log(temp_available_time)
}

const main = document.querySelector('.main')
const sub_main = document.querySelector('.sub-main')

const time_bound_start_a = document.getElementById('time-bound-start-a')
const time_bound_end_a = document.getElementById('time-bound-end-a')

const start_arrow_up_div = document.getElementById('start-arrow-up-div')
start_arrow_up_div.addEventListener('click' , arrowUpBtn)
const start_arrow_down_div = document.getElementById('start-arrow-down-div')
start_arrow_down_div.addEventListener('click' , arrowUpBtn)

const end_arrow_up_div = document.getElementById('end-arrow-up-div')
end_arrow_up_div.addEventListener('click' , arrowUpBtn)
const end_arrow_down_div = document.getElementById('end-arrow-down-div')
end_arrow_down_div.addEventListener('click' , arrowUpBtn)

const proceed_btn = document.getElementById('proceed-btn')

const left_section_A = document.getElementById('left-section-A')
const right_section_A = document.getElementById('right-section-A')
const right_section_add_sched = document.getElementById('right-section-add-sched')

let time_bound_section;

let new_sched_start_time;
let new_sched_end_time;
let choose_start_time_lbl
let new_sched_click = 0

let hover_time_bound = false
let done_start_time_bound = false
let done_end_time_bound = false

function arrowUpBtn(temp_id){
    start_or_end = temp_id.target.id

    let val = null
    if (start_or_end == 'start-arrow-up-div' || start_or_end == 'start-arrow-down-div'){
        val = time_bound_start_a.textContent;   
    }
    else if(start_or_end == 'end-arrow-up-div' || start_or_end == 'end-arrow-down-div'){
        val = time_bound_end_a.textContent;
    }
 
    if(((start_or_end == 'start-arrow-up-div' || start_or_end == 'end-arrow-up-div') && val != "24:00") || 
    ((start_or_end == 'start-arrow-down-div' || start_or_end == 'end-arrow-down-div') && val != "00:00")){ 
        val = val.replace(":" , ".")

        let temp_val = val % 1
        temp_val = temp_val.toFixed(2)

        if (start_or_end == 'start-arrow-up-div' || start_or_end == 'end-arrow-up-div'){
            if(temp_val == 0.30){
                val = parseFloat(val) + 0.70
            }
            else if(temp_val == 0.70){
                val = parseFloat(val) + 0.30
            }
            else{
                val = parseFloat(val) + 0.30
            }
        }
        else if(start_or_end == 'start-arrow-down-div' || start_or_end == 'end-arrow-down-div'){
            if(temp_val == 0.30){
                val = parseFloat(val) - 0.30
            }
            else if(temp_val == 0.70){
                val = parseFloat(val) - 0.70
            }
            else{
                val = parseFloat(val) - 0.70
            }
        }
  
        val = val.toFixed(2)
     
        if(val < 10.0){
            val = "0" + val.toString()
        }

        val = val.replace("." , ":")

        if (start_or_end == 'start-arrow-up-div' || start_or_end == 'start-arrow-down-div'){
            time_bound_start_a.textContent = val
        }else{
            time_bound_end_a.textContent = val
        }
        
    }
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

proceed_btn.addEventListener('click' , function(){
    
    op = 9
    var fade_out_sub_main = setInterval(function(){
        sub_main.style.opacity = "0." + op
        op -= 1
        if(op == 0){
            clearInterval(fade_out_sub_main);
            sub_main.style.display = "none";
            main.setAttribute("style","display: block;");

            let temp_time_bound_start_a = time_bound_start_a.textContent
            temp_time_bound_start_a = temp_time_bound_start_a.replace(":" , ".")
            person_A_time_bound.push(temp_time_bound_start_a)

            let temp_time_bound_end_a = time_bound_end_a.textContent
            temp_time_bound_end_a = temp_time_bound_end_a.replace(":" , ".")
            person_A_time_bound.push(temp_time_bound_end_a)

            // console.log(person_A_time_bound)

            // create div element for every hour starting from start time bound to end time bound
            
            let current = parseFloat(person_A_time_bound[0])

            let temp_current = current

            if(current < 10.0){
                temp_current = "0" + current.toString() + "0"
            }else{
                temp_current = current.toString() + "0"
            }

            let temp_decimal = parseFloat(temp_current % 1)
            temp_decimal = temp_decimal.toFixed(2)

            if(temp_decimal == 0.30){
                temp_current = temp_current.replace("." , ":")
            }else{
                temp_current = temp_current.splice(2, 0 , ":")

                temp_current += "0"
            }

            person_A_time_bound_slice.push(temp_current)

            while(current != parseFloat(person_A_time_bound[1])){

                if(current + 1.0 <= parseFloat(person_A_time_bound[1])){
                    current += 1.0
                }else{
                    temp_current = current % 1
                    temp_current = temp_current.toFixed(2)

                    if(temp_current == 0.30){
                        current += 0.70
                    }else if(temp_current == 0.70){
                        current += 0.30
                    }else{
                        current += 0.30
                    }
                }
                
                if(current < 10.0){
                    temp_current = "0" + current.toString() + "0"
                }else{
                    temp_current = current.toString() + "0"
                }

                temp_decimal = parseFloat(temp_current % 1)
                temp_decimal = temp_decimal.toFixed(2)

                if(temp_decimal == 0.30){
                    temp_current = temp_current.replace("." , ":")
                }else{
                    temp_current = temp_current.splice(2, 0 , ":")

                    temp_current += "0"
                }

                

                person_A_time_bound_slice.push(temp_current)
            }
            //console.log(person_A_time_bound_slice)
            createElementTimeBound()
        }
    }, 1)
}, false)

function createElementTimeBound(){
    for(let i = 0; i < person_A_time_bound_slice.length; i++){
        time_bound_section = document.createElement("BUTTON")
        time_bound_section.textContent = person_A_time_bound_slice[i]
        time_bound_section.className = "left-tb-div-A"
        time_bound_section.id = "time-bound-" + (i + 1)
        time_bound_section.style.fontSize = "2vw"
        time_bound_section.style.fontFamily = "Arial"
        time_bound_section.addEventListener('mouseover' , hoverTimeBound)
        time_bound_section.addEventListener('click' , clickTimeBound)
        
        left_section_A.appendChild(time_bound_section)
    }
}

function hoverTimeBound(time_bound_block){
    if(hover_time_bound && !done_start_time_bound){
        new_sched_start_time.textContent = time_bound_block.target.textContent
    }else if(hover_time_bound && done_start_time_bound){
        new_sched_end_time.textContent = time_bound_block.target.textContent
    }
}

function clickTimeBound(time_bound_block){
    if(hover_time_bound){

        let remove_block = document.getElementById(time_bound_block.target.id)

        if(done_start_time_bound == false){
            remove_block.remove()
            hover_time_bound = false
            choose_start_time_lbl.textContent = "End at"

            new_sched_end_time.style.opacity = "1"
            new_sched_end_time.style.cursor = "pointer"

            done_start_time_bound = true
        }else{

            let temp_start = parseFloat(new_sched_start_time.textContent)
            let temp_end = parseFloat(remove_block.textContent)
            if(temp_end - temp_start >= 2.00){
                remove_block.remove()
                hover_time_bound = false
                choose_start_time_lbl.textContent = "Your Schedule at"
                choose_start_time_lbl.style.left = "25%"

                right_section_add_sched.style.pointerEvents = "auto"
                done_start_time_bound = false
            }
        }
   
    }
    
}

right_section_add_sched.addEventListener('click' , function(){
    right_section_add_sched.style.pointerEvents = "none"
    let new_sched_div = document.createElement("DIV")
    new_sched_div.className = "new-div-sched"

    let to = document.createElement("label")
    to.id = "start-to-end-lbl"
    to.textContent = "to"
    new_sched_div.appendChild(to)

    choose_start_time_lbl = document.createElement("label")
    choose_start_time_lbl.id = "choose-start-time-lbl"
    choose_start_time_lbl.textContent = "Start at"
    new_sched_div.appendChild(choose_start_time_lbl)

    new_sched_start_time = document.createElement("a")
    new_sched_start_time.className = "new-div-sched-start-time"
    new_sched_start_time.addEventListener('click' , clickStartTime)
    new_sched_start_time.textContent = "00:00"

    new_sched_end_time = document.createElement("a")
    new_sched_end_time.className = "new-div-sched-end-time"
    new_sched_end_time.addEventListener('click' , clickEndTime)
    new_sched_end_time.textContent = "00:00"

    new_sched_div.appendChild(new_sched_start_time)
    new_sched_div.appendChild(new_sched_end_time)
    right_section_A.appendChild(new_sched_div)

    for(let i = 1; i <= 3; i++){
        let start_span_element = document.createElement("span")
        start_span_element.className = "start-time-span"
        new_sched_start_time.appendChild(start_span_element)

        let end_span_element = document.createElement("span")
        end_span_element.className = "end-time-span"
        new_sched_end_time.appendChild(end_span_element)
    }
 
}, false )

function clickStartTime(){
    new_sched_start_time.style.color = "rgba(255, 255, 255, 1)"
    new_sched_start_time.style.pointerEvents = "none"

    hover_time_bound = true
    console.log("here")
}

function clickEndTime(){
    new_sched_end_time.style.color = "rgba(255, 255, 255, 1)"
    new_sched_end_time.style.pointerEvents = "none"

    hover_time_bound = true
}