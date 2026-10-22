package org.fahdacademy.solarsaver;

import android.service.dreams.DreamService;
import android.webkit.WebSettings;
import android.webkit.WebView;

/** شاشة توقف النظام (Daydream) — تظهر في إعدادات الشاشة على الأجهزة التي تسمح بشاشات توقف خارجية. */
public class SaverDream extends DreamService {
    private WebView web;

    @Override public void onAttachedToWindow() {
        super.onAttachedToWindow();
        setInteractive(false);
        setFullscreen(true);
        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setAllowFileAccess(true);
        web.setBackgroundColor(0xFF050B1F);
        setContentView(web);
        web.loadUrl("file:///android_asset/index.html");
    }

    @Override public void onDetachedFromWindow() {
        if (web != null) { web.destroy(); web = null; }
        super.onDetachedFromWindow();
    }
}
