import Http from "../Const/server";

class Services {
    Register(data) {
        return Http.post("users/signup", data);
    }
    Login(data) {
        return Http.post("users/signin", data);
    }

    AddStudent(data) {
        return Http.post("students/add", data);
    }
    GetStudent() {
        return Http.get("students/get");
    }
    UpdateStudent(id, data) {
        return Http.put("students/update/" + id, data);
    }
    DeleteStudent(id) {
        return Http.delete("students/delete/" + id);
    }
}
export default new Services();