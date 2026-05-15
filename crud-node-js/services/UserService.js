import bcrypt from "bcryptjs";
import { UserRepository } from "../repository/UserRepository.js";

export class UserService {
    constructor() {
        this.repository = new UserRepository();
    }
    
    async createUser(data) {
        const userExists = await this.repository.getUserByEmail(data.email);
        if(userExists) {
            throw new Error("Email já cadastrado");
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await this.repository.createUser({
            ...data,
            password: hashedPassword
        });
    }

    async getUsers() {
        return await this.repository.getUsers();
    }

    async getUser(id) {
        const user = await this.repository.getUser(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async updateUser(id, data) {
        const user = await this.repository.getUser(id);
        if (!user) {
            throw new Error("User not found");
        }
        return await this.repository.updateUser(user, data);
    }

    async deleteUser(id) {
        const user = await this.repository.getUser(id);
        if(!user) {
            throw new Error("User not found");
        }
        await this.repository.deleteUser(user);
    }
}