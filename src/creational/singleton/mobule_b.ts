import { MyDataBaseClassic } from "./db/my-database-classic";
import './module_a'

const myDataBaseClassic = MyDataBaseClassic.instance;
myDataBaseClassic.add({ name: 'Roberto', age: 20 });
myDataBaseClassic.add({ name: 'Joana', age: 10 });

myDataBaseClassic.show()
