## Introduction to React Native

1. **React Native (RN) is an open source framework launched by Facebook. **

   **It allows us to develop Android and iOS native applications through React syntax**

   - Website: https://reactnative.dev/
   - GitHub: https://github.com/facebook/react-native 

2. **Advantages of React Native**

   - Good development experience: Use unified code specifications to develop mobile programs, without paying attention to differences in mobile terminals.
   - Low development cost: develop once, and can generate Apps on both Android and iOS systems (Learn once, write anywhere).
   - Low learning cost: You only need to master Javascript and React to develop mobile terminals.

3. **Disadvantages of React Native**

   - Immature: Shorter time-to-emergence, high learning costs, and few solutions to some problems.
   - Poor performance: Overall performance is not as good as native development (Android: Java, Kotlin; iOS: Swift, Objective-C).
   - Compatibility: Involving the underlying functions, it needs to be developed separately for both Android and iOS.



## Environment build

1. **Install dependencies**

   1. Install Node.js, the version should be greater than or equal to 14

   2. Install Java SE Development Kit (JDK) 11. You can view the currently installed JDK version

      ```
      javac -version
      ```

   3. Install Yarn, which is a tool provided by Facebook to replace npm, which can speed up the download of node modules

      ```
      npm install -g yarn
      ```

   Next, I will tell you how to build the Android and iOS environments in the Windows system. You can also refer to the official website of React Native for the Android and iOS environments of the MacOS system.

   

2. **Building Expo Environment (Windows)**

   React Native can complete the cross-platform App development of Android and iOS, but it also has certain requirements for the development environment. Regarding the iOS environment, Apple currently only allows the development of iOS applications on Mac computers. So at present, if you want to use RN development (in Windows system) to test in iOS, you need to use Expo to operate. Expo can also be installed on an Android phone for testing, and its tests are all hot loaded.

   1. Assuming that you have Node 14 LTS or greater installed.

   2. You can install Expo CLI via npm

      ```
      npm install -g expo-cli
      ```

   3. Next you can create a new project "testapp" to run

      ```
      expo init testapp
      ```

      ```
      cd testapp
      ```

      ```
      npm start #or expo start
      ```

   4. Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the Camera app.

      

3. **Build a complete native environment for Android (Windows)**

   Although Expo allows you to develop and test on the Windows side with high efficiency, if the functions that need to be developed involve the bottom layer. This requires you to have a complete native environment.

   Although you can use any editor such as VS Code to develop applications (write js code), you still have to install Android Studio to get the tools and environment needed to compile Android applications.

   1. Install Android Studio

      You can download it from the official website. 

      Select the "Custom" option in the installation interface, and make sure the following items are selected：

      - Android SDK

      - Android SDK Platform

      - Android Virtual Device

        

   2. Install the Android SDK

      Android Studio will install the latest version of the Android SDK by default. Currently, the RN application requires the Android 13 (Tiramisu) version of the SDK. You can choose to install various versions of the SDK in the SDK Manager of Android Studio. (You can find the SDK Manager by clicking Configure on the Android Studio welcome screen, or in the Android Studio Preferences menu.)

      You need to select "SDK Platforms" in the SDK Manager, select "Show Package Details" in the lower right corner. Expand the Android 13(Tiramisu) option and make sure the following components are selected：
   
      - Android SDK Platform 33
      - Intel x86 Atom_64 System Image(Official emulator image file)

      You need to select "SDK Tools" in the SDK Manager, select "Show Package Details" in the lower right corner. Expand the "Android SDK Build-Tools" option and make sure that the 33.0.0 version required by React Native is selected. Of course you can have multiple other versions installed at the same time.

      

   3. Configure the ANDROID_HOME environment variable

      You need to create an environment variable named ANDROID_HOMED in the environment variables of the system, and point to the directory where your Android SDK is located. Regarding the path of the SDK, you can check it in the Preferences of Android Studio. After that, you can add some tool directories to the environment variable Path: platform-tools, emulator, tools, tools/bin

      

   4. Project initialization

      1. Use React Native's built-in command-line tools to create a new project called "test-app". This command line tool does not need to be installed, it can be used directly with the `npx` command that comes with node：
   
         ```
         npx react-native init testapp
         ```

      2. Prepare an Android device, which can be an Android phone (connected to the PC via a USB cable) or an Android emulator (create a virtual device in the AVD Manager of Android Studio)

      3. After making sure that the Android device is connected to the PC, run it in the project directory
   
         ```
         cd testapp
         ```
   
         ```
         yarn android
         ```

      4. After the operation is complete, you can see the running initialization App on the Android device.

      5. You can use your favorite editor to change the corresponding text content in the project's App.js file, and then enter r in the terminal. At this point, you will find that the Android device has displayed the modified text content.
   
   

## Tech Demo

When doing the following, you need to make sure that you have mastered some React development (in web development).

1. **Style: The styles used by the component**

   I recommend using Flex to write styles here. The FlexLayout layout engine implemented by Yoga is an order of magnitude less time-consuming than the UIStackViews and AutoLayout layout engines officially provided by Apple. There is no inheritance of styles in RN (except for Text components), and all attributes have no units.

   You can do some exercises with FlexLayout on React Native. Including top-down layout, left-right layout and horizontal and vertical centering layout.

   1. Layout from top to bottom

      ```jsx
      <View style={{ ... }}>
      	<Text style={{ ... }}>Layout from top to bottom</Text>
          <View style={{ ... }}>
              <View style={{ ... }}>
                  <Text style={{ ... }}>Here is the first View</Text>
              </View>
              <View style={{ ... }}>
                  <Text style={{ ... }}>Here is the second View</Text>
              </View>
              <View style={{ ... }}>
                  <Text style={{ ... }}>Here is the third View</Text>
              </View>
          </View>
      </View>
      ```

      Add style in style.

      

   2. Layout from left to right

      ```jsx
      <View style={{ ... }}>
      	<Text style={{ ... }}>Layout from left to right</Text>
      	<View style={{ ... }}>
              <Image 
              	style={{ ... }}
                  source={{uri: 'url',}}
              />
              <Text style={{ ... }}>Describe the picture.</Text>
      	</View>
      </View>
      ```

      Add style in style.

      

   3. Horizontally and vertically centered layout

      ```jsx
      <View style={{ ... }}>
      	<Text style={{ ... }}>Horizontally and vertically centered layout</Text>
      	<View style={{ ... }}>
      		<Text style={{ ... }}> I'm here now!</Text>
      	</View>
      </View>
      ```

      Add style in style.

      

2. **Component: Implement SafeAreaView and ScrollView list display functions**

   Implement a static product list: it contains ProductTable components, Category components and Product components.

   - The ProductTable component displays the Title of the product;
   - Category component shows the type of goods;
   - The Product component displays product information.

   First, create a new index.js file in the created project. If you know how React is used in the web, the operations are the same now, you will use them very easily. 

   Using the SafeAreaView component in index.js, this component can return an area to display data. It adapts a safe area for the mobile phone to ensure that it will not be blocked, such as the camera area of the iPhone. About the ScrollView component is also a mobile phone-specific component, which is different from the View component, and can realize the scrolling effect on the content it wraps. This can prevent the content from exceeding the scope of the View, resulting in failure to display normally.

   In this product list, it is divided into three layers, and the data is passed down one-way step by step. The ProductTable component continues to pass to the Category component after receiving the parameters of the products. After looping through the product categories, the product information is passed to the Product component, and finally the corresponding product elements are generated and displayed on the mobile phone screen.

   

3. **Component: Implement button click count function**

   You need to create a TouchableHighlight.js file, implement a button click event, count and highlight it.

   You can use a TouchableHighlight component that displays touch effects on a button. Use the onPress click event (similar to the click event in the Web) in this component, and connect it with a count function to complete the Button click count function.

   

4. **Component: Implement animation visual effects function**

   You need to create an Animated.js file to implement a function with animation effects.

   You can use an Animated component, and then you can use two buttons to do the action. One of the buttons is used to show the animation effect, and the other button is used to turn off the animation effect.

   

5. **Third-party components: Swiper implements image carousel function**

   You need to create a Swiper.js file to implement a picture carousel function.

   First of all, you need to prepare a few photos in advance. Then, since Swiper is a third-party component, you need npm additional component content.

   ```
   npm i react-native-swiper --save
   ```

   Then add this import in your Swiper.js

   ```
   import Swiper from 'react-native-swiper'
   ```

   Then you can use this component normally. You can create an images folder in this file directory and put the pictures you prepared into it. Write a ScrollView tag in the SwiperComponent class and wrap the Swiper tag in it. This ensures that the pictures you display can be fully displayed in Swiper. Use the Image tag in the Swiper tag to link to the image, and change the style to ensure that your image can be displayed according to the normal size.



**For a more detailed explanation of the steps, you can refer to the code.**
# test
