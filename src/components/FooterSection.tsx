import React from "react";

interface FooterSectionProps {
  onShowToast: (msg: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onShowToast,
}) => {
  const handleShare = async () => {
    const shareData = {
      title: "ដូង ដេត និង ឃៀង លីណា — លិខិតអញ្ជើញមង្គលការ",
      text: "សូមគោរពអញ្ជើញចូលរួមពិធីមង្គលការ ថ្ងៃទី០៥ ខែកុម្ភៈ ឆ្នាំ២០២៧",
      url: window.location.href,
    };

    try {
      if (navigator.share && /^https?:$/.test(window.location.protocol)) {
        await navigator.share(shareData);
        return;
      }
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
        onShowToast("បានចម្លងតំណលិខិតអញ្ជើញ!");
        return;
      }
      onShowToast("សូមចម្លងតំណពីរបារអាសយដ្ឋាន");
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== "AbortError") {
        onShowToast("សូមចែករំលែកតំណពីកម្មវិធីរុករក");
      }
    }
  };

  return (
    <footer className="footer">
      <p className="section-label">With all our love</p>
      <p className="names-mini khmer-names-mini">
        <span className="full-name gold-shimmer-text">ដូង ដេត</span>
        <span className="amp">&amp;</span>
        <span className="full-name gold-shimmer-text">ឃៀង លីណា</span>
      </p>
      <p className="closing">
        សូមអរគុណចំពោះក្តីស្រឡាញ់ ពាក្យជូនពរ និងវត្តមានដ៏ថ្លៃថ្លារបស់លោកអ្នក។{" "}
        <span className="heart">♥</span>
      </p>
      <div className="footer-actions">
        <button
          type="button"
          id="shareButton"
          className="btn"
          onClick={handleShare}
        >
          ចែករំលែកលិខិតអញ្ជើញ
        </button>
        <a className="btn secondary" href="#top">
          ត្រឡប់ទៅខាងលើ ↑
        </a>
      </div>
      <small>05 February 2027 · MADE WITH LOVE</small>
    </footer>
  );
};
