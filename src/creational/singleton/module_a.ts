import { MyDataBaseClassic } from "./db/my-database-classic";

const myDataBaseClassic = MyDataBaseClassic.instance;
myDataBaseClassic.add({ name: 'Augusto', age: 20 });
myDataBaseClassic.add({ name: 'Maria', age: 10 });
myDataBaseClassic.add({ name: 'João', age: 25 });
myDataBaseClassic.add({ name: 'Rafa', age: 32 });

myDataBaseClassic.show()
