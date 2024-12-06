import React, { useState } from "react";
import "./styles.css";

function App() {
  const [activeTab, setActiveTab] = useState("google");

  // Google Ads state (ca înainte)
  const [googleHeadline1, setGoogleHeadline1] = useState(
    "Revizie Stingatoare Bucuresti"
  );
  const [googleHeadline2, setGoogleHeadline2] = useState(
    "Acoperire Bucuresti-Ilfov"
  );
  const [googleHeadline3, setGoogleHeadline3] = useState("");
  const [googleDesc1, setGoogleDesc1] = useState(
    "Suntem autorizati I.G.S.U. si I.S.C.I.R. pentru verificarea si incarcarea stingatoarelor."
  );
  const [googleDesc2, setGoogleDesc2] = useState(
    "Raspundem prompt si ne deplasam gratuit la locatie."
  );
  const [googleURL, setGoogleURL] = useState(
    "www.verificare-stingatoarebucuresti.ro/"
  );
  const [googlePhone, setGooglePhone] = useState("0799838328");
  const [googleAddress, setGoogleAddress] = useState("");
  const [googleSitelinks, setGoogleSitelinks] = useState([
    "Casare Stingatoare",
    "Verificare Stingatoare",
    "Livrare Rapida",
    "",
  ]);
  const [googlePromo, setGooglePromo] = useState("");
  const [googleImage, setGoogleImage] = useState(null);

  // Facebook Ads fields
  const [fbTitle, setFbTitle] = useState(
    "WEBINAR GenAI: un pericol sau o oportunitate"
  );
  const [fbDesc, setFbDesc] = useState(
    "in training de limbi straine si evaluare lingvistica?"
  );
  const [fbURL, setFbURL] = useState("eucom.ro");
  const [fbCTA, setFbCTA] = useState("Book now");
  const [fbImage, setFbImage] = useState(null);

  // 6 variante pentru Facebook Ads:
  // 1: Facebook Feed (varianta 1)
  // 2: Explore (Instagram Explore)
  // 3: Instagram Stories
  // 4: Facebook Stories
  // 5: Facebook Feed (varianta 2)
  // 6: Instagram Feed
  const [fbVariant, setFbVariant] = useState("fb_feed_1");

  const handleSitelinkChange = (index, value) => {
    const newLinks = [...googleSitelinks];
    newLinks[index] = value;
    setGoogleSitelinks(newLinks);
  };

  const handleFbImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setFbImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGoogleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setGoogleImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const renderGoogleForm = () => (
    <div className="input-section">
      <h2>Google Ads Input</h2>
      <label>Headline 1:</label>
      <input
        value={googleHeadline1}
        onChange={(e) => setGoogleHeadline1(e.target.value)}
        maxLength={30}
      />
      <label>Headline 2:</label>
      <input
        value={googleHeadline2}
        onChange={(e) => setGoogleHeadline2(e.target.value)}
        maxLength={30}
      />
      <label>Headline 3:</label>
      <input
        value={googleHeadline3}
        onChange={(e) => setGoogleHeadline3(e.target.value)}
        maxLength={30}
      />

      <label>Description Line 1:</label>
      <input
        value={googleDesc1}
        onChange={(e) => setGoogleDesc1(e.target.value)}
        maxLength={90}
      />
      <label>Description Line 2:</label>
      <input
        value={googleDesc2}
        onChange={(e) => setGoogleDesc2(e.target.value)}
        maxLength={90}
      />

      <label>Final URL:</label>
      <input value={googleURL} onChange={(e) => setGoogleURL(e.target.value)} />

      <label>Phone Number:</label>
      <input
        value={googlePhone}
        onChange={(e) => setGooglePhone(e.target.value)}
      />

      <label>Address:</label>
      <input
        value={googleAddress}
        onChange={(e) => setGoogleAddress(e.target.value)}
      />

      <label>Promotional Text:</label>
      <input
        value={googlePromo}
        onChange={(e) => setGooglePromo(e.target.value)}
      />

      <div>
        <label>Sitelinks:</label>
        {googleSitelinks.map((link, i) => (
          <input
            key={i}
            placeholder={`Sitelink ${i + 1}`}
            value={link}
            onChange={(e) => handleSitelinkChange(i, e.target.value)}
          />
        ))}
      </div>
      <label>Google Ad Image:</label>
      <input type="file" accept="image/*" onChange={handleGoogleImageUpload} />
    </div>
  );

  const renderFacebookForm = () => (
    <div className="input-section">
      <h2>Facebook Ads Input</h2>
      <label>Variante Preview (6 total):</label>
      <select value={fbVariant} onChange={(e) => setFbVariant(e.target.value)}>
        <option value="fb_feed_1">Facebook Feed (Var. 1)</option>
        <option value="explore">Explore (Instagram Explore)</option>
        <option value="ig_stories">Instagram Stories</option>
        <option value="fb_stories">Facebook Stories</option>
        <option value="fb_feed_2">Facebook Feed (Var. 2)</option>
        <option value="ig_feed">Instagram Feed</option>
      </select>

      <label>Title:</label>
      <input value={fbTitle} onChange={(e) => setFbTitle(e.target.value)} />
      <label>Description:</label>
      <input value={fbDesc} onChange={(e) => setFbDesc(e.target.value)} />
      <label>Website URL:</label>
      <input value={fbURL} onChange={(e) => setFbURL(e.target.value)} />
      <label>Call To Action:</label>
      <select value={fbCTA} onChange={(e) => setFbCTA(e.target.value)}>
        <option>Book now</option>
        <option>Learn more</option>
        <option>Sign up</option>
        <option>Shop now</option>
      </select>
      <label>Image:</label>
      <input type="file" accept="image/*" onChange={handleFbImageUpload} />
    </div>
  );

  const renderGooglePreview = () => {
    return (
      <div className="preview-box google-preview-container">
        <h2 className="preview-label">Google Ad Preview (Mobile)</h2>
        <div className="google-ad-frame">
          <div className="google-ad-topline">
            <span>Sponsorizat</span>
            <span className="google-ad-domain">
              {googleURL || "www.example.com/"}
            </span>
          </div>
          <div className="google-ad-main">
            <div className="google-ad-textarea">
              <div className="google-ad-title">
                {googleHeadline1 || "Headline 1"} -{" "}
                {googleHeadline2 || "Headline 2"}{" "}
                {googleHeadline3 && "- " + googleHeadline3}
              </div>
              <div className="google-ad-desc">
                {googleDesc1 || "Description line 1"}{" "}
                {googleDesc2 && "- " + googleDesc2}
              </div>
              {googlePromo && (
                <div className="google-ad-promo">{googlePromo}</div>
              )}
              {googleSitelinks.some((s) => s) && (
                <div className="google-ad-sitelinks">
                  {googleSitelinks.map(
                    (s, i) =>
                      s && (
                        <span key={i} className="sitelink">
                          {s}
                        </span>
                      )
                  )}
                </div>
              )}
              {googlePhone && (
                <div className="google-ad-phone">Sună la {googlePhone}</div>
              )}
              {googleAddress && (
                <div className="google-ad-address">{googleAddress}</div>
              )}
            </div>
            {googleImage && (
              <img
                className="google-ad-image"
                src={googleImage}
                alt="Google Ad"
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderFacebookPreview = () => {
    // În funcție de fbVariant, randăm layout diferit
    // Folosim același titlu, descriere, URL, CTA, imagine, dar schimbăm brand/handle si layout.
    // Datele din imagini:
    // - Facebook feed: "EUCOM Business Language" brand
    // - Instagram feed/explore: handle "eucom_languages"
    // - Stories la fel, unii brand, altele handle, culori ca in imagini

    const title = fbTitle || "Your Ad Title";
    const desc = fbDesc || "Your ad description goes here.";
    const cta = fbCTA || "Book now";
    const url = fbURL || "example.com";
    const image = fbImage;

    switch (fbVariant) {
      case "fb_feed_1":
        // Facebook Feed (Var. 1) - ca prima imagine: brand "EUCOM Business Language"
        return (
          <div className="preview-box fb-preview-container fb-feed-var1">
            <h2 className="preview-label">Facebook Feed Preview (Var. 1)</h2>
            <div className="fb-ad-preview feed">
              <div className="fb-ad-header-line">
                <img
                  className="fb-profile-icon"
                  src="./fb_brand.png"
                  alt="brand"
                />
                <span className="fb-ad-brand">EUCOM Business Language</span> ·{" "}
                <span className="fb-ad-sponsored">Sponsored</span>
              </div>
              {image && (
                <img className="fb-ad-image" src={image} alt="Ad preview" />
              )}
              <div className="fb-ad-content">
                <div className="fb-ad-title-strong">{title}</div>
                <div className="fb-ad-desc-feed">{desc}</div>
                <div className="fb-ad-url-feed">{url}</div>
                <div className="fb-ad-cta-btn-feed">{cta}</div>
              </div>
              <div className="fb-ad-social-line">
                <span>👍 Like</span> <span>💬 Comment</span>{" "}
                <span>↪ Share</span>
              </div>
            </div>
          </div>
        );
      case "explore":
        // Explore (Instagram Explore): "eucom_languages"
        return (
          <div className="preview-box fb-preview-container ig-explore">
            <h2 className="preview-label">
              Explore Preview (Instagram Explore)
            </h2>
            <div className="fb-ad-preview explore">
              <div className="fb-ad-header-line">
                <img
                  className="fb-profile-icon"
                  src="./ig_brand.png"
                  alt="brand"
                />
                <span className="fb-ad-brand">eucom_languages</span> ·{" "}
                <span className="fb-ad-sponsored">Sponsored</span>
                <div className="fb-ad-explore-label">Explore</div>
              </div>
              {image && (
                <img className="fb-ad-image" src={image} alt="Ad preview" />
              )}
              <div className="fb-ad-content">
                <div className="fb-ad-cta-explore">{cta}</div>
                <div className="fb-ad-desc-explore">
                  {url} {title} {desc}
                </div>
              </div>
            </div>
          </div>
        );
      case "ig_stories":
        // Instagram Stories: "eucom_languages"
        return (
          <div className="preview-box fb-story-container ig-story">
            <h2 className="preview-label">Instagram Stories Preview</h2>
            <div className="fb-story-preview">
              {image && (
                <img className="fb-story-image" src={image} alt="Story" />
              )}
              <div className="fb-story-topbar">
                <img
                  className="fb-profile-icon"
                  src="./ig_brand.png"
                  alt="brand"
                />
                <span>eucom_languages</span> ·{" "}
                <span className="fb-ad-sponsored">Sponsored</span>
              </div>
              <div className="fb-story-overlay">
                <div className="fb-story-text">
                  <div className="fb-story-title">{title}</div>
                  <div className="fb-story-desc">{desc}</div>
                </div>
                <div className="fb-story-cta">{cta}</div>
              </div>
            </div>
          </div>
        );
      case "fb_stories":
        // Facebook Stories: "EUCOM Business Language"
        return (
          <div className="preview-box fb-story-container fb-story">
            <h2 className="preview-label">Facebook Stories Preview</h2>
            <div className="fb-story-preview">
              {image && (
                <img className="fb-story-image" src={image} alt="Story" />
              )}
              <div className="fb-story-topbar">
                <img
                  className="fb-profile-icon"
                  src="./fb_brand.png"
                  alt="brand"
                />
                <span>EUCOM Business Language</span> ·{" "}
                <span className="fb-ad-sponsored">Sponsored</span>
              </div>
              <div className="fb-story-overlay">
                <div className="fb-story-text">
                  <div className="fb-story-title">{title}</div>
                  <div className="fb-story-desc">{desc}</div>
                </div>
                <div className="fb-story-cta">{cta}</div>
              </div>
            </div>
          </div>
        );
      case "fb_feed_2":
        // Facebook Feed (Var. 2) - similar cu primul FB Feed, dar poate fara social line sau alt mic detaliu
        return (
          <div className="preview-box fb-preview-container fb-feed-var2">
            <h2 className="preview-label">Facebook Feed Preview (Var. 2)</h2>
            <div className="fb-ad-preview feed">
              <div className="fb-ad-header-line">
                <img
                  className="fb-profile-icon"
                  src="./fb_brand.png"
                  alt="brand"
                />
                <span className="fb-ad-brand">EUCOM Business Language</span> ·{" "}
                <span className="fb-ad-sponsored">Sponsored</span>
              </div>
              {image && (
                <img className="fb-ad-image" src={image} alt="Ad preview" />
              )}
              <div className="fb-ad-content">
                <div className="fb-ad-title-strong">{title}</div>
                <div className="fb-ad-desc-feed">{desc}</div>
                <div className="fb-ad-url-feed">{url}</div>
                <div className="fb-ad-cta-btn-feed">{cta}</div>
              </div>
              {/* Poate doar un alt styling mic */}
            </div>
          </div>
        );
      case "ig_feed":
        // Instagram Feed: "eucom_languages"
        return (
          <div className="preview-box fb-preview-container ig-feed">
            <h2 className="preview-label">Instagram Feed Preview</h2>
            <div className="fb-ad-preview instagramFeed">
              <div className="fb-ad-header-line">
                <img
                  className="fb-profile-icon"
                  src="./ig_brand.png"
                  alt="brand"
                />
                <span className="fb-ad-brand">eucom_languages</span> ·{" "}
                <span className="fb-ad-sponsored">Sponsored</span>
                <div className="ig-label">Instagram</div>
              </div>
              {image && (
                <img className="fb-ad-image" src={image} alt="Ad preview" />
              )}
              <div className="fb-ad-content">
                <div className="fb-ad-cta-btn-feed">{cta}</div>
                <div className="fb-ad-desc-feed">
                  {title} {desc}
                </div>
                <div className="fb-ad-url-feed">{url}</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1 className="branding">PGG WEB S.R.L. Ad Preview</h1>
      <div className="tabs">
        <button
          className={activeTab === "google" ? "active" : ""}
          onClick={() => setActiveTab("google")}
        >
          Google Ads
        </button>
        <button
          className={activeTab === "facebook" ? "active" : ""}
          onClick={() => setActiveTab("facebook")}
        >
          Facebook Ads
        </button>
      </div>

      {activeTab === "google" && (
        <>
          <div className="form-container">{renderGoogleForm()}</div>
          <div className="preview-container">{renderGooglePreview()}</div>
        </>
      )}

      {activeTab === "facebook" && (
        <>
          <div className="form-container">{renderFacebookForm()}</div>
          <div className="preview-container">{renderFacebookPreview()}</div>
        </>
      )}
    </div>
  );
}

export default App;
