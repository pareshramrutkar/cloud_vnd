public class dis {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public dis(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void disply() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}
