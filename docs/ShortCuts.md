
# Experiment 1
### Working with Maven: Creating a Maven Project, Understanding the POM File

#### Steps to Get Output :

1. Create a New Maven Project:
   - Open IntelliJ IDEA.
   - Go to File > New > Project.
   - Select Maven from the project types.
   - Set the project name and location, then click Finish.
![500](attachments/Pasted%20image%2020250602155846.png)

2. Create a Simple Website (HTML, CSS, and Logo):
    - In the src/main/resources folder, create an index.html file, a style.css file, and place the image.png image.
![](attachments/Pasted%20image%2020250602160333.png)

Example of a simple index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="image.png" alt="Logo">
    </header>
    <h1>Welcome to My Simple Website</h1>
</body>
</html>
```

Example of style.css:
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

header {
    background-color: #333;
    padding: 10px;
}

header img {
    height: 50px;
}

h1 {
    color: #333;
    margin-top: 20px;
}
```

5. Upload the Website to GitHub:
   - Initialize a Git repository in your project folder:
```bash
git init
```

   - Add your files and commit them:

```bash
git add .
git commit -m "Initial commit"
```

   - Create a GitHub repository and push the local project to GitHub:

```bash
git remote add origin <your-repository-url>
git push -u origin master
```

---

# Experiment 2
### Installing and Setting Up Gradle in IntelliJ IDEA

#### Creating a Gradle Project in IntelliJ IDEA:

Step 1: Open IntelliJ IDEA and Create a New Project
1. Click on "New Project".
2. Select "Gradle" (under Java/Kotlin).
3. Choose Groovy or Kotlin DSL (Domain Specific Language) for the build script.
4. Set the Group ID (e.g., com.example).
5. Click Finish.
![500](attachments/Pasted%20image%2020250602162905.png)
Step 2: See the Project Structure
```
my-gradle-project
├── build.gradle (Groovy Build Script)
├── settings.gradle
└── src
    ├── main
    │   ├── java
	|	|	└── com.example
	|	|		└── Main     <--- You need to edit this
    │   └── resources
    └── test
        ├── java
        └── resources
```
Step 1: Modify build.gradle (Groovy DSL) 
(Copy paste the entire code, or you can just change if "id" to "application")
```groovy
plugins {
    id 'application'
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.8.1'
}

application {
    mainClass = 'com.example.Main'
}
```

Step 2: edit Main.java in src/main/java/com/example

```java
package com.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Gradle!");
    }
}
```

Step 3: Build and Run the Project

- Press `ALT + F12` to open terminal.

```bash
gradle run
```

#### Hosting a Static Website on GitHub Pages

Step 1: Create a /docs Directory

- Create docs inside the root folder (not in src).
- Add your HTML, CSS, and images inside /docs.

Step 2: Modify build.gradle to Copy Website Files (This is optional)

```groovy
task copyWebsite(type: Copy) {
    from 'src/main/resources/website'
    into 'docs'
}
```

Step 3: Commit and Push to GitHub

```bash
git add .
git commit -m "Deploy website using Gradle"
git push origin main
```

Step 4: Enable GitHub Pages

- Go to GitHub Repo -> Settings -> Pages.
- Select the /docs folder as the source.

Your website will be hosted at:

```
https://yourusername.github.io/repository-name/
```

---

# Experiment 3
### Working with Gradle: Setting Up a Gradle Project, Understanding Build Scripts

> exact same as 2nd one copy same

Step 1: Open IntelliJ IDEA and Create a New Project
1. Click on "New Project".
2. Select "Gradle" (under Java/Kotlin).
3. Choose Groovy or Kotlin DSL (Domain Specific Language) for the build script.
4. Set the Group ID (e.g., com.example).
5. Click Finish.
![500](attachments/Pasted%20image%2020250602162905.png)
Step 2: See the Project Structure
```
my-gradle-project
├── build.gradle (Groovy Build Script)
├── settings.gradle
└── src
    ├── main
    │   ├── java
	|	|	└── com.example
	|	|		└── Main     <--- You need to edit this
    │   └── resources
    └── test
        ├── java
        └── resources
```
Step 1: Modify build.gradle (Groovy DSL) 
(Copy paste the entire code, or you can just change if "id" to "application")
```groovy
plugins {
    id 'application'
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.8.1'
}

application {
    mainClass = 'com.example.Main'
}
```

Step 2: edit Main.java in src/main/java/com/example

```java
package com.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Gradle!");
    }
}
```

Step 3: Build and Run the Project

- Press `ALT + F12` to open terminal.

```bash
gradle run
```

#### Hosting a Static Website on GitHub Pages

Step 1: Create a /docs Directory

- Create docs inside the root folder (not in src).
- Add your HTML, CSS, and images inside /docs.

Step 2: Modify build.gradle to Copy Website Files (This is optional)

```groovy
task copyWebsite(type: Copy) {
    from 'src/main/resources/website'
    into 'docs'
}
```

Step 3: Commit and Push to GitHub

```bash
git add .
git commit -m "Deploy website using Gradle"
git push origin main
```

Step 4: Enable GitHub Pages

- Go to GitHub Repo -> Settings -> Pages.
- Select the /docs folder as the source.

Your website will be hosted at:

```
https://yourusername.github.io/repository-name/
```

---
# Experiment 4
### Gradle Kotlin DSL: Setting Up & Building a Kotlin Project in IntelliJ IDEA
>(Not working as of now)
#### Setting Up the Gradle Project
Step 1: Create a New Project
1. Open IntelliJ IDEA.
2. Click on File > New > Project.
3. Name your project -> MVNGRDKOTLINDEMO
4. Click Finish.
![500](attachments/Pasted%20image%2020250602213138.png)
###### Understanding build.gradle.kts
After creating the project, the default build.gradle.kts file looks like this:

```kotlin
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.8.10" // Use latest stable Kotlin version
    application
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib")) // Kotlin Standard Library
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.2")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.8.2")
}

tasks.test {
    useJUnitPlatform()
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "17" // Match with your JDK version
}

application {
    mainClass.set("MainKt") // Update this if using a package
}
```

#### Creating the Main Kotlin File
Now, create your Main.kt file inside src/main/kotlin/.
If you're using a package (e.g., org.example), it should look like:

```kotlin
package org.example

fun main() {
    println("Hello, Gradle with Kotlin DSL!")
}
```
If you're not using a package, remove the package line and ensure mainClass.set("MainKt") in build.gradle.kts.

###### Building and Running the Project
Build the Project

```bash
./gradlew build
```

Run the Project

```bash
./gradlew run
```

#### Packaging as a JAR
To run the project without Intellij, we need a JAR file.

1. Create a Fat (Uber) JAR
Modify build.gradle.kts:

```kotlin
tasks.register<Jar>("fatJar") {
    archiveClassifier.set("all")
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    manifest {
        attributes["Main-Class"] = "MainKt"
    }
    from(configurations.runtimeClasspath.get().map { if (it.isDirectory) it else zipTree(it) })
    with(tasks.jar.get() as CopySpec)
}
```

2. Build the Fat JAR

```bash
./gradlew fatJar
```

3. Run the Fat JAR

```bash
java -jar build/libs/MVNGRDKOTLINDEMO-1.0-SNAPSHOT-all.jar
```

---
# Experiment 5
### Build and Run a Java Application with Maven, Migrate the Same Application to Gradle

#### Create and Build a Java Application with Maven

1. Create a Maven Project in IntelliJ IDEA
	1. Open IntelliJ IDEA
		- Launch IntelliJ IDEA and click on File -> New -> Project. 
	2. Select Maven
		- In the New Project window, choose Maven from the options on the left.
		- Check Create from archetype and select maven-archetype-quickstart.
		- Click Next. 
![500](attachments/Pasted%20image%2020250603003203.png)
	3. Wait for IntelliJ to Load Dependencies
		- IntelliJ will automatically download the Maven dependencies, so just relax for a moment. 


2. Update pom.xml to Add Build Plugin. Copy paste this entire shit.
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
  
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>Experiment5</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>Experiment5</name>
  <url>http://maven.apache.org</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!-- Compiler Plugin -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>

      <!-- Jar Plugin -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-jar-plugin</artifactId>
        <version>3.2.0</version>
        <configuration>
          <archive>
            <manifest>
              <mainClass>com.example.App</mainClass>
            </manifest>
          </archive>
        </configuration>
      </plugin>
    </plugins>
  </build>

</project>
```

3. Build and Run the Maven Project
	   Press Alt + F12 to open the terminal.

```bash
mvn clean compile
mvn package
```

4. After the above command a Jar file will be create find it inside the project directory structure :

```
D:\Idea Projects\MVNGRDLDEMO\target\Experiment5-1.0-SNAPSHOT.jar <---- This might be different in your system
```

![400](attachments/Pasted%20image%2020250603004002.png)

5. Run the JAR File
   To run the generated JAR file, use:

```bash
java -jar target\Experiment5-1.0-SNAPSHOT.jar
```

###### Migrate Maven Project to Gradle

Step 1: Initialize Gradle in Your Project
1. Open terminal (if not open) using ALT + F12 and check if your in the project directory only  :

```bash
cd "D:\Idea Projects\Experiment5"
```

2. Run Gradle Init Command
Execute the following command to migrate your Maven project to Gradle:

```bash
gradle init --type pom
```

This command will convert your Maven pom.xml into a Gradle build.gradle file. 

![](attachments/Pasted%20image%2020250603004953.png)
select Groovy in this step and second question just hit enter.

Step 2: Add these lines to the end of existing `build.gradle`

```groovy
group = 'com.example'
version = '1.0-SNAPSHOT'

jar {
    manifest {
        attributes(
            'Main-Class': 'com.example.App'
        )
    }
}
```

Step 3: Open terminal using ALT+F12 and run the build command

```bash
gradle clean build
```

Step 4: After the above command a Jar file will be create find it inside the project directory structure :

```
D:\Idea Projects\MVNGRDLDEMO\target\Experiment5-1.0-SNAPSHOT.jar <---- This might be different in your system
```

![500](attachments/Pasted%20image%2020250603012529.png)
Step 5: Run the JAR File
   To run the generated JAR file, use:

```bash
java -jar build\libs\Experiment5-1.0-SNAPSHOT.jar
```


---