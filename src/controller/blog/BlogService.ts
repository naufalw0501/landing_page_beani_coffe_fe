import axios from "axios";
import { BlogInterface } from "./BlogDataInterface";
import { BASE_URL } from "../../Constant";

class BlogService {
    static async getTopReleaseBlogs(): Promise<BlogInterface[]> {
        try {
            const response = await axios.get(`${BASE_URL}/api/blog/top-release`);
            return response.data.map((blog: BlogInterface) => ({
                ...blog,
                image: `${BASE_URL}/api/blog/image/${blog.cover_file}`,
            }));
        } catch (err) {
            console.log("Error fetching top release blogs:", err);
            throw err;
        }
    }
}

export { BlogService };
