import axios from "axios";
import { MenuInterface } from "./MenuDataInterface";
import { BASE_URL } from "../../Constant";

class MenuService {
    static async getTopOrders(): Promise<MenuInterface[]> {
        try {
            const response = await axios.get(`${BASE_URL}/api/menu/top-orders`);
            return response.data.map((menu: MenuInterface) => ({
                ...menu,
                image: `${BASE_URL}/api/menu/image/${menu.nama_file_foto}`,
                image_hd: `${BASE_URL}/api/menu/image/${menu.nama_file_foto_hd}`,
            }));
        } catch (err) {
            console.log("Error fetching top orders:", err);
            throw err;
        }
    }

    static async getTopRelease(): Promise<MenuInterface[]> {
        try {
            const response = await axios.get(`${BASE_URL}/api/menu/top-release`);
            return response.data.map((menu: MenuInterface) => ({
                ...menu,
                image: `${BASE_URL}/api/menu/image/${menu.nama_file_foto}`,
            }));
        } catch (err) {
            console.log("Error fetching top release:", err);
            throw err;
        }
    }
}

export { MenuService };
