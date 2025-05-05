import React from 'react'

const AboutInfo = () => {
  return (
    <div
      style={{
        background: '#fbfbfb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          maxWidth: '1100px',
          width: '100%',
          background: '#fbfbfb',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
          overflow: 'hidden',
        }}
      >
        {/* Left Side: Text */}
        <div style={{ flex: 1, padding: '40px 40px 40px 40px' }}>
          <div style={{ color: '#00529c', fontWeight: 700, marginBottom: 8 }}>
            INFO
          </div>
          <h1
            style={{
              color: '#414141',
              fontWeight: 900,
              fontSize: '2.5rem',
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            MEIE ETTEVÕTTE <br />
            ON TEGELENUD ERINEVATE <br />
            EHITUSTÖÖDEGA JUBA ÜLE <br />
            12 AASTA.
          </h1>
          <p style={{ color: '#414141', marginBottom: 16 }}>
            Selle aja jooksul oleme saanud palju kogemusi ja oskusi, mis aitavad meid igas uues projektis. Me teame, kuidas teha tööd korralikult ja usaldusväärselt.
          </p>
          <p style={{ color: '#414141', marginBottom: 16 }}>
            Meie eesmärk on igal töö puhul esmalt aru saada, mida klient täpselt soovib ja vajab. Me kuulame hoolikalt ja selgitame kõik detailid välja. Iga projekti lõpptulemus peab olema selline, et klient on rahul, tunneb rõõmu tehtud tööst ja jagab head tagasisidet.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: 24 }}>
            <button
              style={{
                background: '#00529c',
                color: '#fbfbfb',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              KONTAKT
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#414141',
                border: '2px solid #414141',
                padding: '12px 28px',
                borderRadius: '',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
             REFERENTSID
            </button>
          </div>
        </div>
        {/* Right Side: Image and Text */}
        <div style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <img
            src="https://picsum.photos/500/300"
            alt="Factory"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: 24,
              objectFit: 'cover',
            }}
          />
          <p style={{ color: '#414141', marginBottom: 16 }}>
            Oma tööde tegemisel kasutame alati kvaliteetseid ja ametlikult sertifitseeritud materjale. Me ei tee allahindlusi kvaliteedis. Lisaks anname tehtud töödele garantii, mis vastab kõigile tarbijakaitse nõuetele. Nii saab klient kindel olla, et töö on usaldusväärne ja vastupidav.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
