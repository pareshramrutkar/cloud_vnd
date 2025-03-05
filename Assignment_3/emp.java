import java.util.*;


public class emp {
    public static void main(String[] args) {
        // Creating dis objects
        dis emp1 = new dis(101, "Paresh", 50800);
        dis emp2 = new dis(102, "Ankit", 160000);
        dis emp3 = new dis(103, "Rushabh", 45520);

        // Storing details in a list
        List<dis> displayList = new ArrayList<>();
        displayList.add(emp1);
        displayList.add(emp2);
        displayList.add(emp3);

        // Displaying dis details
        System.out.println("dis Details:");
        for (dis emp : displayList) {
            emp.disply();
        }
    }
}
