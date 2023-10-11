import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user-store", () => {
    const users = ref([]);
    const filteredUsers = ref([]);

    const fetch = async () => {
        try {
            let response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            // let albums = await axios.get(
            //     "https://jsonplaceholder.typicode.com/albums"
            // );
            // let photos = await axios.get(
            //     "https://jsonplaceholder.typicode.com/photos"
            // );

            users.value = response.data;
            // albums.value = albums.data;
            // photos.value = photos.data;
            filteredUsers.value = users.value;
        } catch (error) {
            console.log(error);
        }
    };

    const filter = (query) => {
        if (query == "") {
            filteredUsers.value = users.value;
            return;
        }

        filteredUsers.value = users.value.filter((user) => {
            return (
                user.name.toLowerCase().includes(query.toLowerCase()) ||
                user.email.toLowerCase().includes(query.toLowerCase()) ||
                user.website.toLowerCase().includes(query.toLowerCase()) ||
                user.company.name.toLowerCase().includes(query.toLowerCase()) ||
                // user.albums.toLowerCase().includes(query.toLowerCase())
            );
        });
    };

    return {
        users,
        // albums,
        // photos,
        fetch,
        filter,
        filteredUsers,
    };
});
