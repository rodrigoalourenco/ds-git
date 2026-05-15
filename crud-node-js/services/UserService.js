import { UserRepository } from "../repository/UserRepository.js";

export class UserService {
    constructor() {
        this.repository = new UserRepository();
    }
    
    async createUser(data) {
        // regra de negocio
        return await this.repository.createUser(data);
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