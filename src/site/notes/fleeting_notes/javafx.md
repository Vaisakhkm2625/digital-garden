---
{"dg-publish":true,"permalink":"/fleeting-notes/javafx/"}
---

---

# 🧾 JavaFX 

---

## 📦 1. Setup

### Add JavaFX to your project

For **Maven**, add dependencies:

```xml
<dependencies>
  <dependency>
    <groupId>org.openjfx</groupId>
    <artifactId>javafx-controls</artifactId>
    <version>XX</version>
  </dependency>
  <!-- Add more modules if needed -->
</dependencies>
```

---

## 🚀 2. Launching a JavaFX App

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class MainApp extends Application {
    @Override
    public void start(Stage primaryStage) {
        Label label = new Label("Hello JavaFX!");
        Scene scene = new Scene(label, 300, 200);
        primaryStage.setTitle("My JavaFX App");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

---

## 🧱 3. Layouts

### Common Layout Panes

```java
HBox hbox = new HBox(10);        // Horizontal layout
VBox vbox = new VBox(10);        // Vertical layout
BorderPane border = new BorderPane(); // Top, Bottom, Left, Right, Center
GridPane grid = new GridPane();  // Row/column layout
StackPane stack = new StackPane(); // Stack nodes
FlowPane flow = new FlowPane();  // Flow layout
```

---

## 🧩 4. Controls (UI Elements)

| Control       | Example                                        |
| ------------- | ---------------------------------------------- |
| Button        | `Button btn = new Button("Click");`            |
| Label         | `Label lbl = new Label("Text");`               |
| TextField     | `TextField tf = new TextField();`              |
| PasswordField | `PasswordField pf = new PasswordField();`      |
| TextArea      | `TextArea ta = new TextArea();`                |
| CheckBox      | `CheckBox cb = new CheckBox("Yes");`           |
| RadioButton   | `RadioButton rb = new RadioButton();`          |
| ComboBox      | `ComboBox<String> cb = new ComboBox<>();`      |
| ListView      | `ListView<String> lv = new ListView<>();`      |
| TableView     | `TableView<Person> table = new TableView<>();` |

---

## 🖱️ 5. Event Handling

### Button Click Example

```java
btn.setOnAction(e -> {
    System.out.println("Button clicked!");
});
```

### Text Change Listener

```java
textField.textProperty().addListener((obs, oldText, newText) -> {
    System.out.println("Changed to: " + newText);
});
```

---

## 🎨 6. Styling (CSS)

### Inline Style

```java
button.setStyle("-fx-background-color: #00FF00;");
```

### External CSS

```css
/* style.css */
.button {
    -fx-background-color: #336699;
    -fx-text-fill: white;
}
```

### Applying CSS

```java
scene.getStylesheets().add("style.css");
```

---

## 📄 7. FXML (Optional UI Markup)

### FXML File (sample.fxml)

```xml
<Button fx:id="myButton" text="Click Me" onAction="#handleClick" />
```

### Controller

```java
public class MyController {
    @FXML private Button myButton;

    @FXML private void handleClick(ActionEvent event) {
        System.out.println("Clicked!");
    }
}
```

### Load FXML

```java
FXMLLoader loader = new FXMLLoader(getClass().getResource("sample.fxml"));
Parent root = loader.load();
```

---

## 📚 8. Useful Tips

- Use `Platform.runLater()` for UI updates from non-UI threads.
    
- ObservableList is used for dynamic collections in UI (e.g., `ListView`).
    
- Bindings can link properties between UI components.
    

---

Would you like this cheat sheet as a downloadable PDF or image? Or should I include advanced topics like animations, charts, or custom components?


Absolutely! Here's a focused and clear **JavaFX `Observable` Cheat Sheet**, covering the core `Observable*` types used in JavaFX for building reactive UIs.

---

# 📘 JavaFX `Observable` Cheat Sheet

---

## 🧠 What is `Observable` in JavaFX?

In JavaFX, an `Observable` is an object that allows listeners to observe and react to changes in its value or contents. It forms the basis of JavaFX's reactive property system.

---

## 🧩 Core Observable Interfaces

| Interface             | Description                                       |
| --------------------- | ------------------------------------------------- |
| `Observable`          | Marker interface for observables.                 |
| `ObservableValue<T>`  | A read-only observable value.                     |
| `WritableValue<T>`    | A value you can read and write.                   |
| `ObservableList<T>`   | A list that notifies listeners of changes.        |
| `ObservableMap<K, V>` | A map with observable key-value changes.          |
| `ObservableSet<E>`    | A set that allows observation of element changes. |

---

## 🔁 Observable Properties

These are commonly used JavaFX bindings that wrap data and support listeners:

### Primitive Properties

```java
StringProperty name = new SimpleStringProperty("John");
IntegerProperty age = new SimpleIntegerProperty(25);
DoubleProperty salary = new SimpleDoubleProperty(50000.0);
BooleanProperty active = new SimpleBooleanProperty(true);
```

### Object Property

```java
ObjectProperty<LocalDate> date = new SimpleObjectProperty<>(LocalDate.now());
```

---

## 📡 Listening to Changes

### Change Listener

```java
name.addListener((obs, oldVal, newVal) -> {
    System.out.println("Changed from " + oldVal + " to " + newVal);
});
```

### Invalidation Listener

```java
name.addListener((obs) -> {
    System.out.println("Property was invalidated!");
});
```

---

## 🔗 Binding Properties

### Unidirectional Binding

```java
label.textProperty().bind(name);  // Label updates when name changes
```

### Bidirectional Binding

```java
textField.textProperty().bindBidirectional(name);
```

### Binding with Expression

```java
total.bind(price.multiply(quantity));  // total = price × quantity
```

---

## 🧮 Common Binding Utilities

```java
Bindings.concat(str1, str2)
Bindings.when(condition).then(val1).otherwise(val2)
Bindings.add(a, b)
Bindings.subtract(a, b)
Bindings.createStringBinding(() -> customLogic(), dependencies...)
```

---

## 🗂️ Collections with Observables

### ObservableList

```java
ObservableList<String> list = FXCollections.observableArrayList();
```

### ObservableMap / ObservableSet

```java
ObservableMap<String, String> map = FXCollections.observableHashMap();
ObservableSet<String> set = FXCollections.observableSet();
```

### Listeners

```java
list.addListener((ListChangeListener<String>) change -> { /* ... */ });
map.addListener((MapChangeListener<String, String>) change -> { /* ... */ });
set.addListener((SetChangeListener<String>) change -> { /* ... */ });
```

---

## ⚠️ Watch Out For

* Always use JavaFX `Property` types for UI binding, not plain fields.
* Avoid modifying `ObservableList` from background threads unless wrapped in `Platform.runLater()`.
* Circular bindings (A binds to B and B binds to A) can cause runtime issues.

---

Would you like a **diagram** of property relationships or a **PDF export** of this cheat sheet? I can also extend this with **custom binding examples**, **animation observables**, or **best practices**.




---
# Q: JavaFX `ObservableList` Cheat Sheet



Absolutely! Here's a concise yet complete **JavaFX ObservableList Cheat Sheet**, perfect for quick reference when working with dynamic data-bound UI elements like `ListView`, `TableView`, and more.

---

# 📘 JavaFX `ObservableList` Cheat Sheet

---

## 🧠 What is `ObservableList`?

`ObservableList` is a special list in JavaFX that notifies listeners when elements are added, removed, or modified. It's commonly used in UI controls like `ListView`, `ComboBox`, `TableView`, etc.

---

## 🏗️ Creating an ObservableList

```java
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

// Empty list
ObservableList<String> list = FXCollections.observableArrayList();

// With initial elements
ObservableList<String> list2 = FXCollections.observableArrayList("A", "B", "C");

// From existing collection
List<String> baseList = Arrays.asList("X", "Y");
ObservableList<String> observable = FXCollections.observableList(baseList);
```

---

## 🔁 Basic Operations

```java
list.add("New Item");
list.addAll("One", "Two");
list.remove("Two");
list.remove(0);           // remove by index
list.set(0, "Updated");   // replace
list.clear();
```

---

## 🔍 Accessing Elements

```java
String item = list.get(0);
int size = list.size();
boolean contains = list.contains("X");
```

---

## 🔔 Listening for Changes

```java
list.addListener((ListChangeListener<String>) change -> {
    while (change.next()) {
        if (change.wasAdded()) {
            System.out.println("Items added: " + change.getAddedSubList());
        }
        if (change.wasRemoved()) {
            System.out.println("Items removed: " + change.getRemoved());
        }
    }
});
```

---

## 🔗 Binding to UI Controls

```java
ListView<String> listView = new ListView<>();
listView.setItems(list);  // Automatically updates when list changes

ComboBox<String> comboBox = new ComboBox<>();
comboBox.setItems(list);
```

---

## 🧩 Filtering and Sorting (ObservableList View)

```java
import javafx.collections.transformation.FilteredList;
import javafx.collections.transformation.SortedList;

// Filtered
FilteredList<String> filtered = new FilteredList<>(list, s -> s.startsWith("A"));

// Sorted
SortedList<String> sorted = new SortedList<>(list);
sorted.setComparator((a, b) -> a.compareToIgnoreCase(b));

// Bind to a TableView or ListView
listView.setItems(filtered);
```

---

## ⚙️ Advanced: Custom Object Lists

```java
ObservableList<Person> people = FXCollections.observableArrayList(
    person -> new Observable[] { person.nameProperty(), person.ageProperty() }
);
```

### `Person` Class Example

```java
public class Person {
    private final StringProperty name = new SimpleStringProperty();
    private final IntegerProperty age = new SimpleIntegerProperty();

    // Getters & Setters
    public StringProperty nameProperty() { return name; }
    public IntegerProperty ageProperty() { return age; }
}
```

---

## 💡 Tips

* Always use `ObservableList` for JavaFX controls.
* Use `FXCollections.unmodifiableObservableList()` for read-only views.
* For large data sets, consider using `VirtualFlow`-based controls like `ListView`, `TableView`.

---

Would you like this cheat sheet exported to a **PDF**, or should I include usage examples with **TableView** or **custom cell factories** too?
