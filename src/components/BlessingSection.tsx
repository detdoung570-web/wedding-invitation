import React from 'react';
import { PhotoItem } from '../types/wedding.ts';

interface BlessingSectionProps {
  onOpenPhoto: (item: PhotoItem) => void;
}

export const BlessingSection: React.FC<BlessingSectionProps> = ({ onOpenPhoto }) => {
  return (
    <section className="blessing" aria-labelledby="blessingHeading">
      <img
        className="side-photo left cursor-pointer transition-transform hover:scale-105"
        src="/assets/couple-4.jpg"
        alt="រូបថតគូស្នេហ៍"
        loading="lazy"
        onClick={() =>
          onOpenPhoto({
            id: 'blessing-left',
            src: '/assets/couple-4.jpg',
            alt: 'រូបថតគូស្នេហ៍',
            caption: 'Our love story',
          })
        }
      />
      <img
        className="side-photo right cursor-pointer transition-transform hover:scale-105"
        src="/assets/couple-5.jpg"
        alt="រូបថតគូស្នេហ៍"
        loading="lazy"
        onClick={() =>
          onOpenPhoto({
            id: 'blessing-right',
            src: '/assets/couple-5.jpg',
            alt: 'រូបថតគូស្នេហ៍',
            caption: 'Best day ever',
          })
        }
      />

      <div className="title-wrap wrap">
        <p className="section-label">Made with love</p>
        <h2 id="blessingHeading">វត្តមានរបស់លោកអ្នកជាពរជ័យ</h2>
        <div className="fine-line" aria-hidden="true">
          ❧
        </div>
        <p className="message">
          វត្តមានដ៏ថ្លៃថ្លារបស់{' '}
          <b>លោក លោកស្រី អ្នកនាងកញ្ញា និងញាតិមិត្តជាទីគោរព</b>{' '}
          គឺជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម និងជាពរជ័យដ៏ប្រពៃសម្រាប់យើងខ្ញុំទាំងពីរ
          និងក្រុមគ្រួសារ។
          <br />
          យើងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅអស់ពីដួងចិត្ត។
        </p>
        <img
          className="rose-deco"
          src="/assets/khach.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
