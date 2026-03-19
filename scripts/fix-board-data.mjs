const TOKEN = process.env.AIRTABLE_TOKEN;
const BASE = process.env.AIRTABLE_BASE_ID || 'appUnOrjMRA3SgdlJ';
const TABLE = process.env.AIRTABLE_TABLE_ID || 'tbl0py0VCawR40kgA';
const URL = `https://api.airtable.com/v0/${BASE}/${TABLE}`;

const fixes = [
  {
    id: 'recAuBri5XE318rCG',
    fields: {
      title: '비수도권 특화 지원: 지방소재 기업을 위한 정책자금 가이드',
      category: '정책자금',
      summary: '비수도권 소재 중소기업이 활용할 수 있는 지역 특화 정책자금 프로그램을 안내합니다.',
      content: '<h2>비수도권 기업을 위한 맞춤형 지원</h2><p>수도권 집중 현상 속에서 지방소재 기업들은 상대적으로 자금 접근성이 낮습니다. 정부는 이를 해소하기 위해 비수도권 특화 정책자금을 운영하고 있습니다.</p><h3>주요 지원 프로그램</h3><ul><li><strong>지방중소기업 육성자금</strong> — 비수도권 제조업/서비스업 기업 대상, 최대 10억원 융자</li><li><strong>지역특화산업 지원</strong> — 각 광역시/도의 전략산업 분야 기업 우대</li><li><strong>농공단지 입주기업 특별지원</strong> — 시설자금/운전자금 우대금리 적용</li></ul><h3>신청 시 유의사항</h3><p>지역 소재 확인을 위해 사업장 등기부등본 또는 임대차계약서가 필요합니다. 본사와 공장 소재지가 다른 경우, 실제 사업 활동이 이루어지는 곳을 기준으로 판단합니다.</p><p>비즈업은 비수도권 기업의 자금 조달을 전문적으로 지원하고 있습니다. 무료 자금진단을 통해 적합한 프로그램을 안내받으세요.</p>',
      tags: '비수도권,지방기업,정책자금,지역특화,중소기업',
    },
  },
  {
    id: 'recZY9aZqgi2L6tdv',
    fields: {
      title: '스타트업 정책자금 A to Z: 창업 초기 기업이 꼭 알아야 할 지원제도',
      category: '정책자금',
      summary: '스타트업과 창업 초기 기업이 활용할 수 있는 정책자금 프로그램을 총정리합니다.',
      content: '<h2>창업 초기, 자금이 가장 절실한 시기</h2><p>스타트업에게 초기 자금 확보는 생존과 직결됩니다. 정부는 창업 활성화를 위해 다양한 정책자금을 운영하고 있으며, 업력 7년 이내 기업에 특화된 프로그램이 많습니다.</p><h3>대표적 지원 프로그램</h3><ul><li><strong>창업기업 지원자금</strong> — 중소벤처기업부, 업력 7년 이내, 최대 1억원</li><li><strong>청년창업 특별지원</strong> — 만 39세 이하 대표, 우대금리 적용</li><li><strong>기술보증기금 스타트업 보증</strong> — 기술성 평가 기반, 담보 없이 보증 가능</li><li><strong>혁신창업 사업화 지원</strong> — R&D 및 사업화 비용 최대 1억원 지원</li></ul><h3>성공적인 신청을 위한 팁</h3><p>사업계획서의 완성도가 핵심입니다. 시장 분석, 수익 모델, 성장 전략을 구체적으로 작성해야 합니다. 또한 재무제표가 아직 부족한 초기 기업은 기술력과 대표자 역량으로 보완할 수 있습니다.</p><p>비즈업은 스타트업 맞춤형 자금 컨설팅을 제공합니다. 사전 역량평가를 통해 최적의 프로그램을 안내해 드립니다.</p>',
      tags: '스타트업,창업,정책자금,초기기업,창업지원',
    },
  },
  {
    id: 'reccnjTMpeSZJvAb0',
    fields: {
      title: '소상공인 바우처 프로그램: 2026년 달라진 신청 요건 총정리',
      category: '기업지원',
      summary: '2026년 소상공인 바우처 프로그램의 변경사항과 신청 방법을 안내합니다.',
      content: '<h2>소상공인 바우처, 무엇이 달라졌나</h2><p>소상공인시장진흥공단에서 운영하는 바우처 프로그램은 매년 내용이 업데이트됩니다. 2026년에는 디지털 전환 지원이 대폭 강화되었습니다.</p><h3>2026년 주요 변경사항</h3><ul><li><strong>디지털 바우처 확대</strong> — 온라인 판로 개척, 스마트 상점 구축 비용 지원 확대</li><li><strong>신청 자격 완화</strong> — 연매출 기준 상향 조정 (기존 10억 이하 → 15억 이하)</li><li><strong>지원 금액 인상</strong> — 업종별 최대 500만원까지 지원 (기존 300만원)</li><li><strong>교육 바우처 신설</strong> — 대표자 및 직원 역량강화 교육비 별도 지원</li></ul><h3>신청 방법</h3><p>소상공인시장진흥공단 홈페이지에서 온라인 신청이 가능합니다. 사업자등록증, 매출증빙서류, 사업계획서를 준비해 주세요.</p><p>비즈업에서 바우처 신청 적격 여부를 무료로 진단해 드립니다.</p>',
      tags: '소상공인,바우처,디지털전환,기업지원,2026',
    },
  },
  {
    id: 'recsu2AhgHblhpU4Y',
    fields: {
      title: '2026년 정부 정책자금 총정리: 중소기업이 꼭 알아야 할 핵심 프로그램',
      category: '정책자금',
      summary: '2026년 중소기업 대상 주요 정책자금 프로그램과 변경사항을 한눈에 정리합니다.',
      content: '<h2>2026년 정책자금, 무엇이 달라졌나</h2><p>매년 초 정부는 중소기업 지원 정책자금 계획을 발표합니다. 2026년에는 디지털 전환과 탄소중립 관련 지원이 크게 확대되었습니다.</p><h3>핵심 프로그램 요약</h3><ul><li><strong>혁신성장 지원자금</strong> — 기술혁신형 중소기업 대상, 최대 100억원 융자</li><li><strong>긴급경영안정자금</strong> — 경영 위기 기업 긴급 지원, 저금리 융자</li><li><strong>수출기업 글로벌화 자금</strong> — 해외 진출 중소기업 운전/시설자금 지원</li><li><strong>스마트공장 구축자금</strong> — 제조업 디지털 전환 설비투자 지원</li></ul><h3>신청 일정</h3><p>대부분의 정책자금은 1~2월에 공고가 나오며, 3~4월에 집중 접수됩니다. 선착순 마감되는 프로그램이 많으므로 사전 준비가 중요합니다.</p><p>비즈업의 무료 자금진단을 통해 기업 상황에 맞는 최적의 정책자금을 안내받으세요.</p>',
      tags: '정책자금,중소기업,2026,정부지원,융자',
    },
  },
  {
    id: 'reczDAvso5sUAbEXX',
    fields: {
      title: 'AX 스프린트 트랙: AI 전환을 위한 중소기업 맞춤 지원 프로그램',
      category: '기업지원',
      summary: 'AI 전환(AX)을 준비하는 중소기업을 위한 스프린트 트랙 프로그램을 소개합니다.',
      content: '<h2>AX 스프린트 트랙이란?</h2><p>AI 전환(AX, AI Transformation)은 더 이상 대기업만의 과제가 아닙니다. 정부는 중소기업의 AI 도입을 가속화하기 위해 AX 스프린트 트랙 프로그램을 운영합니다.</p><h3>프로그램 주요 내용</h3><ul><li><strong>AI 컨설팅</strong> — 전문 컨설턴트가 기업별 AI 도입 전략 수립</li><li><strong>솔루션 도입 지원</strong> — AI 솔루션 구매/구축 비용 최대 70% 지원</li><li><strong>인력 양성</strong> — 재직자 AI 활용 교육 프로그램 제공</li><li><strong>실증 지원</strong> — AI 솔루션 실제 적용 후 성과 측정까지 지원</li></ul><h3>지원 대상</h3><p>제조업, 서비스업 등 업종 제한 없이 AI 도입 의지가 있는 중소기업이면 신청 가능합니다. 단, AI 도입 계획서 제출이 필요하며, 기존 IT 인프라 수준에 따라 지원 단계가 달라집니다.</p><p>비즈업은 AX 스프린트 트랙 신청 컨설팅을 지원합니다. 기업의 디지털 성숙도를 진단하고 최적의 지원 프로그램을 안내합니다.</p>',
      tags: 'AI전환,AX,스프린트트랙,중소기업,디지털전환',
    },
  },
];

async function fixRecords() {
  for (const fix of fixes) {
    try {
      const res = await fetch(`${URL}/${fix.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields: fix.fields }),
      });
      const data = await res.json();
      if (data.error) {
        console.error(`FAIL ${fix.id}:`, data.error);
      } else {
        console.log(`OK ${fix.id}: ${data.fields.title}`);
      }
    } catch (err) {
      console.error(`ERROR ${fix.id}:`, err.message);
    }
  }
}

fixRecords();
