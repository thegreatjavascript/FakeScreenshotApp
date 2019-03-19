package com.fakeScreen;

import android.app.Application;

import com.facebook.react.ReactApplication;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.imagepicker.ImagePickerPackage;
// import ui.popovermenu.RNPopoverMenuPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.react.rnspinkit.RNSpinkitPackage;  

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ExtraDimensionsPackage(),
            new RNViewShotPackage(),
          new ImagePickerPackage(),
          // new RNPopoverMenuPackage(),
          new VectorIconsPackage(),
          new RNGestureHandlerPackage(),
          new RNSpinkitPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
