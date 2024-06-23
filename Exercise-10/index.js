function get_random_integer(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function name_generator(){
    let adj = null;
    let shop = null;
    let word = null;

    ran_num = get_random_integer(1, 4);
    if (ran_num == 1){
        adj = "Amazing";
    }
    else if (ran_num == 2){
        adj = "Crazy";
    }
    else {
        adj = "Fire";
    }

    ran_num = get_random_integer(1, 4);
    if (ran_num == 1){
        shop = "Engine";
    }
    else if (ran_num == 2){
        shop = "Food";
    }
    else {
        shop = "Market";
    }

    ran_num = get_random_integer(1, 4);
    if (ran_num == 1){
        word = "Bros";
    }
    else if (ran_num == 2){
        word = "Limited";
    }
    else {
        word = "Hub";
    }

    return "The ".concat(adj, shop, word);

}


console.log("\n", name_generator(), "\n");