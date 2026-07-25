/**
 * Divisor decorativo inspirado na borda de um forminha de doce / prato de bolo.
 * Usado entre seções para reforçar a identidade da confeitaria sem depender
 * de linhas retas genéricas.
 */
export default function ScallopDivider({ color = 'var(--color-blush)', flip = false }) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      style={{ width: '100%', height: 28, display: 'block', transform: flip ? 'rotate(180deg)' : 'none' }}
      aria-hidden="true"
    >
      <path
        d="M0,0 
           Q 25,40 50,0 
           Q 75,40 100,0 
           Q 125,40 150,0 
           Q 175,40 200,0 
           Q 225,40 250,0 
           Q 275,40 300,0 
           Q 325,40 350,0 
           Q 375,40 400,0 
           Q 425,40 450,0 
           Q 475,40 500,0 
           Q 525,40 550,0 
           Q 575,40 600,0 
           Q 625,40 650,0 
           Q 675,40 700,0 
           Q 725,40 750,0 
           Q 775,40 800,0 
           Q 825,40 850,0 
           Q 875,40 900,0 
           Q 925,40 950,0 
           Q 975,40 1000,0 
           Q 1025,40 1050,0 
           Q 1075,40 1100,0 
           Q 1125,40 1150,0 
           Q 1175,40 1200,0 
           L1200,0 L0,0 Z"
        fill={color}
      />
    </svg>
  );
}
