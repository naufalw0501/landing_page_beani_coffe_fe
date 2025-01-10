import axios from "axios";
import { TestimoniInterface } from "./TestimoniDataInterface";
import { BASE_URL } from "../../Constant";

class TestimoniService {
    static async getAllTestimoni(): Promise<TestimoniInterface[]> {
        try {
            const response = await axios.get(`${BASE_URL}/api/testimoni`);
            return response.data.map((testimoni: TestimoniInterface) => ({
                ...testimoni,
            }));
        } catch (err) {
            console.log("Error fetching testimonies:", err);
            throw err;
        }
    }
}

export { TestimoniService };
