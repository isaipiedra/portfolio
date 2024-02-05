export let create_header =  (object) => {
    let created_item = document.createElement("li");
    const navigation_list = document.querySelector("#navigation_list");
    for(let item of Object.entries(object.navigation_items)){
        if(!item[0].includes("option")){
            created_item = document.createElement("div");
            created_item.textContent = item[1];
            navigation_list.appendChild(created_item);

            created_item.addEventListener('mouseover', () => {
                navigation_list.classList = "green_animation_first";
            });
        } else {
            created_item = document.createElement("li");
            created_item.textContent = item[1];
            navigation_list.appendChild(created_item);

            if(item[0].includes("first")){
                created_item.addEventListener('mouseover', () => {
                    navigation_list.classList = "blue_animation";
                });
            } else if (item[0].includes("second") || item[0].includes("third")) {
                created_item.addEventListener('mouseover', () => {
                    navigation_list.classList = "green_animation_first";
                });
            } else {
                created_item.addEventListener('mouseover', () => {
                    navigation_list.classList = "green_animation_second";
                });
            }
        }
    }
};
