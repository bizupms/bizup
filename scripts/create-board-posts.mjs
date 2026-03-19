// 6개 정책자금 구조화 콘텐츠 생성 스크립트
// R2에 HTML 업로드 → Airtable에 URL 저장

const WORKER_URL = ""; // TODO: Update Worker URL for bizup

const posts = [
  {
    제목: "2026년 중소기업 정책자금 4.43조원 총정리: 신청부터 선정까지",
    요약: "중소벤처기업부 4조 4,313억원 규모 정책자금의 주요 프로그램, 신청 일정, 지원 조건을 한눈에 정리합니다.",
    카테고리: "정책자금",
    태그: "정책자금,중소기업,중소벤처기업부,융자,2026",
    작성일: "2026-03-05",
    slug: "2026-sme-policy-fund-guide",
    html: `<div class="article-content">
<div style="background:linear-gradient(135deg,#1e3a5f 0%,#0f2847 100%);border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid rgba(59,130,246,0.3)">
<h2 style="color:#60a5fa;margin:0 0 8px;font-size:22px">2026년 정책자금 총 규모</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:20px">
<div style="flex:1;min-width:140px;background:rgba(59,130,246,0.15);border-radius:12px;padding:20px;text-align:center">
<div style="font-size:32px;font-weight:800;color:#60a5fa">4.43조</div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px">총 공급 규모</div>
</div>
<div style="flex:1;min-width:140px;background:rgba(16,185,129,0.15);border-radius:12px;padding:20px;text-align:center">
<div style="font-size:32px;font-weight:800;color:#10b981">4.06조</div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px">융자 규모</div>
</div>
<div style="flex:1;min-width:140px;background:rgba(245,158,11,0.15);border-radius:12px;padding:20px;text-align:center">
<div style="font-size:32px;font-weight:800;color:#f59e0b">3,670억</div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px">이차보전</div>
</div>
<div style="flex:1;min-width:140px;background:rgba(168,85,247,0.15);border-radius:12px;padding:20px;text-align:center">
<div style="font-size:32px;font-weight:800;color:#a855f7">60%+</div>
<div style="font-size:14px;color:rgba(255,255,255,0.7);margin-top:4px">비수도권 집중</div>
</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #3b82f6;padding-left:16px;margin:28px 0 16px">주요 프로그램별 지원 내용</h3>

<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr style="background:rgba(59,130,246,0.2)">
<th style="padding:14px 16px;text-align:left;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4);white-space:nowrap">프로그램</th>
<th style="padding:14px 16px;text-align:left;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4)">대상</th>
<th style="padding:14px 16px;text-align:right;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4);white-space:nowrap">한도</th>
<th style="padding:14px 16px;text-align:center;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4);white-space:nowrap">금리</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">혁신성장 지원자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">기술혁신형 중소기업</td>
<td style="padding:12px 16px;text-align:right;color:#60a5fa;font-weight:600">최대 100억</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">정책금리</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">긴급경영안정자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">경영위기 기업</td>
<td style="padding:12px 16px;text-align:right;color:#60a5fa;font-weight:600">업체당 10억</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">저금리 우대</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">수출기업 글로벌화자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">해외진출 중소기업</td>
<td style="padding:12px 16px;text-align:right;color:#60a5fa;font-weight:600">최대 70억</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">정책금리</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">스마트공장 구축자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">제조업 디지털 전환</td>
<td style="padding:12px 16px;text-align:right;color:#60a5fa;font-weight:600">최대 20억</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">우대금리</td>
</tr>
<tr>
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">AX 스프린트 트랙</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">AI 도입 기업</td>
<td style="padding:12px 16px;text-align:right;color:#60a5fa;font-weight:600">한도 확대</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">금리 우대</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #10b981;padding-left:16px;margin:28px 0 16px">신청 일정 타임라인</h3>
<div style="position:relative;padding-left:28px;margin:20px 0">
<div style="position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#3b82f6,#10b981)"></div>
<div style="margin-bottom:24px;position:relative"><div style="position:absolute;left:-24px;top:4px;width:12px;height:12px;border-radius:50%;background:#3b82f6"></div><div style="color:#93c5fd;font-size:13px;font-weight:600">2025년 12월</div><div style="color:rgba(255,255,255,0.8);margin-top:4px">융자계획 공고 발표</div></div>
<div style="margin-bottom:24px;position:relative"><div style="position:absolute;left:-24px;top:4px;width:12px;height:12px;border-radius:50%;background:#6366f1"></div><div style="color:#a5b4fc;font-size:13px;font-weight:600">2026년 1월 5일~</div><div style="color:rgba(255,255,255,0.8);margin-top:4px">온라인 신청 시작 (서울/지방 → 경기/인천 순)</div></div>
<div style="margin-bottom:24px;position:relative"><div style="position:absolute;left:-24px;top:4px;width:12px;height:12px;border-radius:50%;background:#8b5cf6"></div><div style="color:#c4b5fd;font-size:13px;font-weight:600">2026년 2~3월</div><div style="color:rgba(255,255,255,0.8);margin-top:4px">서류 심사 및 현장 실태조사</div></div>
<div style="position:relative"><div style="position:absolute;left:-24px;top:4px;width:12px;height:12px;border-radius:50%;background:#10b981"></div><div style="color:#6ee7b7;font-size:13px;font-weight:600">2026년 3~4월</div><div style="color:rgba(255,255,255,0.8);margin-top:4px">선정 통보 및 자금 집행</div></div>
</div>

<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:24px;margin-top:28px">
<h4 style="color:#93c5fd;margin:0 0 12px">신청 준비 체크리스트</h4>
<ul style="margin:0;padding-left:20px;color:rgba(255,255,255,0.8);line-height:2">
<li>사업자등록증 및 법인등기부등본</li>
<li>최근 3개년 재무제표 (결산 확정분)</li>
<li>사업계획서 (용도별 자금소요 명시)</li>
<li>기술성 평가 관련 인증서 (해당 시)</li>
<li>수출실적 증빙 (글로벌화 자금 신청 시)</li>
</ul>
</div>

<p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:24px;line-height:1.8">
문의: 중소기업통합콜센터 1357 | 정책자금 전담 콜센터 1811-3655<br>
신청: 중소벤처기업진흥공단 누리집 (www.kosmes.or.kr)
</p>
</div>`,
  },
  {
    제목: "소상공인 경영안정 바우처 25만원 신청 가이드: 자격부터 사용처까지",
    요약: "2026년 소상공인 경영안정 바우처 25만원의 신청 자격, 방법, 사용처를 상세하게 안내합니다.",
    카테고리: "기업지원",
    태그: "소상공인,경영안정,바우처,정부지원금,2026",
    작성일: "2026-03-04",
    slug: "2026-small-biz-voucher-guide",
    html: `<div class="article-content">
<div style="background:linear-gradient(135deg,#065f46 0%,#064e3b 100%);border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid rgba(16,185,129,0.3)">
<h2 style="color:#6ee7b7;margin:0 0 16px;font-size:22px">소상공인 경영안정 바우처</h2>
<div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap">
<div style="flex:1;min-width:200px">
<div style="font-size:48px;font-weight:800;color:#10b981">25만원</div>
<div style="color:rgba(255,255,255,0.7);margin-top:4px">1인당 지원 금액</div>
</div>
<div style="flex:2;min-width:250px;color:rgba(255,255,255,0.85);line-height:1.8">
소상공인의 고정비 부담을 줄이기 위한 정부 지원 사업입니다. 4대 보험, 공과금, 차량 연료비 등에 사용할 수 있는 디지털 바우처로 지급됩니다.
</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #10b981;padding-left:16px;margin:28px 0 16px">신청 자격 요건</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:20px 0">
<div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:20px">
<div style="color:#10b981;font-weight:700;margin-bottom:8px">매출 기준</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">2025년 연 매출 0원 초과 ~ 1억 400만원 미만</div>
</div>
<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:20px">
<div style="color:#3b82f6;font-weight:700;margin-bottom:8px">사업자 조건</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">개인 또는 법인 사업자<br>소상공인 확인서 필요</div>
</div>
<div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:12px;padding:20px">
<div style="color:#f59e0b;font-weight:700;margin-bottom:8px">제외 업종</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">유흥, 도박, 사행성 업종 등 소상공인 정책자금 제외 업종</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #f59e0b;padding-left:16px;margin:28px 0 16px">바우처 사용처 상세</h3>

<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr style="background:rgba(245,158,11,0.15)">
<th style="padding:14px 16px;text-align:left;color:#fbbf24;border-bottom:2px solid rgba(245,158,11,0.4)">사용처</th>
<th style="padding:14px 16px;text-align:left;color:#fbbf24;border-bottom:2px solid rgba(245,158,11,0.4)">상세 내용</th>
<th style="padding:14px 16px;text-align:center;color:#fbbf24;border-bottom:2px solid rgba(245,158,11,0.4)">결제 방법</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">4대 보험료</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">국민연금, 건강보험, 고용보험, 산재보험</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">자동 납부</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">공과금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">전기료, 도시가스, 수도요금, 통신요금</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">청구서 납부</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">차량 연료비</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">주유소, 충전소 (사업용 차량)</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">카드 결제</td>
</tr>
<tr>
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">화재공제료</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">전통시장 화재공제 납부</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">자동 납부</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #6366f1;padding-left:16px;margin:28px 0 16px">신청 절차</h3>
<div style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0">
<div style="flex:1;min-width:150px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:12px;padding:16px;text-align:center">
<div style="font-size:24px;font-weight:800;color:#818cf8">01</div>
<div style="color:#e2e8f0;font-weight:600;margin:8px 0 4px">자격 확인</div>
<div style="color:rgba(255,255,255,0.6);font-size:13px">소상공인24에서 사전 확인</div>
</div>
<div style="flex:1;min-width:150px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:12px;padding:16px;text-align:center">
<div style="font-size:24px;font-weight:800;color:#818cf8">02</div>
<div style="color:#e2e8f0;font-weight:600;margin:8px 0 4px">온라인 신청</div>
<div style="color:rgba(255,255,255,0.6);font-size:13px">voucher.sbiz24.kr</div>
</div>
<div style="flex:1;min-width:150px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:12px;padding:16px;text-align:center">
<div style="font-size:24px;font-weight:800;color:#818cf8">03</div>
<div style="color:#e2e8f0;font-weight:600;margin:8px 0 4px">서류 심사</div>
<div style="color:rgba(255,255,255,0.6);font-size:13px">약 2~3주 소요</div>
</div>
<div style="flex:1;min-width:150px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:16px;text-align:center">
<div style="font-size:24px;font-weight:800;color:#10b981">04</div>
<div style="color:#e2e8f0;font-weight:600;margin:8px 0 4px">바우처 수령</div>
<div style="color:rgba(255,255,255,0.6);font-size:13px">신한카드 앱에서 확인</div>
</div>
</div>

<div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:12px;padding:20px;margin-top:24px">
<div style="color:#f87171;font-weight:700;margin-bottom:8px">주의사항</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.8">
바우처 사용 기한은 <strong>2026년 12월 31일</strong>까지이며, 기한 경과 시 잔액은 국고로 회수됩니다. 현금 인출 및 양도는 불가합니다.
</div>
</div>

<p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:24px;line-height:1.8">
문의: 소상공인통합콜센터 1533-0100<br>
신청: 소상공인 경영안정 바우처 (voucher.sbiz24.kr)
</p>
</div>`,
  },
  {
    제목: "2026년 청년창업 지원제도 완벽 가이드: 자금·세제·교육 총정리",
    요약: "청년창업사관학교, 예비창업패키지, 세액감면까지 청년 창업자를 위한 정부 지원제도를 총정리합니다.",
    카테고리: "기업지원",
    태그: "청년창업,창업지원금,예비창업패키지,청년창업사관학교,2026",
    작성일: "2026-03-03",
    slug: "2026-youth-startup-support",
    html: `<div class="article-content">
<div style="background:linear-gradient(135deg,#4c1d95 0%,#3730a3 100%);border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid rgba(139,92,246,0.3)">
<h2 style="color:#c4b5fd;margin:0 0 8px;font-size:22px">2026년 창업 지원 사업 총 규모</h2>
<div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:20px">
<div style="flex:1;min-width:180px;text-align:center">
<div style="font-size:40px;font-weight:800;color:#a78bfa">3.46조</div>
<div style="color:rgba(255,255,255,0.7);margin-top:4px">총 지원 예산</div>
</div>
<div style="flex:1;min-width:180px;text-align:center">
<div style="font-size:40px;font-weight:800;color:#818cf8">508개</div>
<div style="color:rgba(255,255,255,0.7);margin-top:4px">지원 사업 수</div>
</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #8b5cf6;padding-left:16px;margin:28px 0 16px">주요 청년창업 지원 프로그램 비교</h3>

<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr style="background:rgba(139,92,246,0.2)">
<th style="padding:14px 16px;text-align:left;color:#c4b5fd;border-bottom:2px solid rgba(139,92,246,0.4)">프로그램</th>
<th style="padding:14px 16px;text-align:left;color:#c4b5fd;border-bottom:2px solid rgba(139,92,246,0.4)">대상</th>
<th style="padding:14px 16px;text-align:right;color:#c4b5fd;border-bottom:2px solid rgba(139,92,246,0.4);white-space:nowrap">지원금</th>
<th style="padding:14px 16px;text-align:left;color:#c4b5fd;border-bottom:2px solid rgba(139,92,246,0.4)">지원 내용</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">청년창업사관학교</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">만 39세 이하, 창업 3년 이내</td>
<td style="padding:12px 16px;text-align:right;color:#a78bfa;font-weight:600">최대 1억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">사업비 + 공간 + 교육 + 코칭</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">예비창업패키지</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">예비창업자 ~ 업력 7년</td>
<td style="padding:12px 16px;text-align:right;color:#a78bfa;font-weight:600">최대 2억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">사업화 자금 + 멘토링</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">초기창업패키지</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">창업 3년 이내</td>
<td style="padding:12px 16px;text-align:right;color:#a78bfa;font-weight:600">최대 1억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">사업화 + 특화 프로그램</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">창업도약패키지</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">창업 3~7년</td>
<td style="padding:12px 16px;text-align:right;color:#a78bfa;font-weight:600">최대 3억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">성장 전략 + 해외 진출</td>
</tr>
<tr>
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">청년전용 창업자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">만 39세 이하 대표</td>
<td style="padding:12px 16px;text-align:right;color:#a78bfa;font-weight:600">최대 1억 융자</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">우대금리 융자</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #f59e0b;padding-left:16px;margin:28px 0 16px">청년창업 세액감면 제도</h3>

<div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:12px;padding:24px;margin:20px 0">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px">
<div>
<div style="color:#fbbf24;font-weight:700;margin-bottom:8px">감면 대상</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">만 15~34세 청년 창업자<br>(병역 이행 시 최대 6년 추가)</div>
</div>
<div>
<div style="color:#fbbf24;font-weight:700;margin-bottom:8px">감면 기간</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">첫 소득 발생 연도부터<br>최대 5년간</div>
</div>
<div>
<div style="color:#fbbf24;font-weight:700;margin-bottom:8px">감면 비율</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">수도권 과밀억제권역: 50%<br>그 외 지역: 100%</div>
</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #3b82f6;padding-left:16px;margin:28px 0 16px">성공적인 신청을 위한 핵심 팁</h3>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;margin:20px 0">
<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:20px">
<div style="color:#60a5fa;font-weight:700;margin-bottom:8px">사업계획서가 핵심</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">시장 분석, 수익 모델, 성장 전략을 데이터와 함께 구체적으로 작성하세요.</div>
</div>
<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:20px">
<div style="color:#60a5fa;font-weight:700;margin-bottom:8px">일정 관리 필수</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">대부분 1~3월 집중 공고. K-Startup 포털에서 일정을 미리 확인하세요.</div>
</div>
</div>

<p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:24px;line-height:1.8">
문의: K-Startup 창업지원포털 (www.k-startup.go.kr) | 중기부 콜센터 1357
</p>
</div>`,
  },
  {
    제목: "신용보증기금 vs 기술보증기금: 중소기업 보증 프로그램 완벽 비교",
    요약: "담보 없이 자금을 조달할 수 있는 신보·기보의 보증 프로그램을 비교 분석합니다.",
    카테고리: "정책자금",
    태그: "신용보증기금,기술보증기금,보증서,무담보,중소기업",
    작성일: "2026-03-02",
    slug: "2026-kodit-kibo-comparison",
    html: `<div class="article-content">
<div style="background:linear-gradient(135deg,#1e3a5f 0%,#0f2847 100%);border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid rgba(59,130,246,0.3)">
<h2 style="color:#60a5fa;margin:0 0 16px;font-size:22px">보증기관, 왜 필요한가?</h2>
<p style="color:rgba(255,255,255,0.85);line-height:1.8;margin:0">
담보력이 부족한 중소기업이 금융기관으로부터 원활하게 자금을 조달할 수 있도록 <strong style="color:#60a5fa">보증서를 발급</strong>하는 공공 금융기관입니다. 보증서가 있으면 부동산 담보 없이도 대출이 가능합니다.
</p>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #3b82f6;padding-left:16px;margin:28px 0 16px">신보 vs 기보 핵심 비교</h3>

<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr style="background:rgba(59,130,246,0.2)">
<th style="padding:14px 16px;text-align:left;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4)">구분</th>
<th style="padding:14px 16px;text-align:center;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4)">신용보증기금 (신보)</th>
<th style="padding:14px 16px;text-align:center;color:#93c5fd;border-bottom:2px solid rgba(59,130,246,0.4)">기술보증기금 (기보)</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">평가 기준</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">기업 신용도 + 재무상태</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">기술성 + 사업성</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">주요 대상</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">일반 중소기업·소상공인</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">기술혁신형·R&D 기업</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">보증 한도</td>
<td style="padding:12px 16px;text-align:center;color:#60a5fa;font-weight:600">기업당 최대 30억</td>
<td style="padding:12px 16px;text-align:center;color:#60a5fa;font-weight:600">기업당 최대 30억</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">보증료율</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">연 0.5~3.0%</td>
<td style="padding:12px 16px;text-align:center;color:#10b981">연 0.5~3.0%</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">보증 비율</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">대출금의 85~100%</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">대출금의 85~100%</td>
</tr>
<tr>
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">특화 프로그램</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">청년희망드림,<br>신중년행복드림</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">스타트업 보증,<br>기술소공인 보증</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #10b981;padding-left:16px;margin:28px 0 16px">어떤 기관을 선택해야 할까?</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin:20px 0">
<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:24px">
<div style="color:#60a5fa;font-size:18px;font-weight:700;margin-bottom:12px">신보가 유리한 경우</div>
<ul style="margin:0;padding-left:20px;color:rgba(255,255,255,0.8);font-size:14px;line-height:2">
<li>업력 3년 이상, 안정적 매출</li>
<li>재무제표가 양호한 기업</li>
<li>소상공인 운전자금 필요</li>
<li>신용등급이 좋은 기업</li>
</ul>
</div>
<div style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.3);border-radius:12px;padding:24px">
<div style="color:#a855f7;font-size:18px;font-weight:700;margin-bottom:12px">기보가 유리한 경우</div>
<ul style="margin:0;padding-left:20px;color:rgba(255,255,255,0.8);font-size:14px;line-height:2">
<li>기술 기반 스타트업</li>
<li>특허/인증 보유 기업</li>
<li>재무제표가 부족한 초기 기업</li>
<li>R&D 투자 비중이 높은 기업</li>
</ul>
</div>
</div>

<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:24px;margin-top:24px">
<h4 style="color:#93c5fd;margin:0 0 12px">보증 신청 시 준비 서류</h4>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
<ul style="margin:0;padding-left:20px;color:rgba(255,255,255,0.8);font-size:14px;line-height:2">
<li>사업자등록증 사본</li>
<li>최근 3개년 재무제표</li>
<li>부가세 과세표준증명</li>
</ul>
<ul style="margin:0;padding-left:20px;color:rgba(255,255,255,0.8);font-size:14px;line-height:2">
<li>대표자 신분증</li>
<li>사업계획서</li>
<li>기술 관련 인증서 (기보)</li>
</ul>
</div>
</div>

<p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:24px;line-height:1.8">
신용보증기금: www.kodit.co.kr | 기술보증기금: www.kibo.or.kr
</p>
</div>`,
  },
  {
    제목: "비수도권 기업을 위한 지역 특화 정책자금: 2.4조원 집중 지원",
    요약: "전체 정책자금의 60% 이상이 투입되는 비수도권 특화 지원 프로그램을 상세히 안내합니다.",
    카테고리: "정책자금",
    태그: "비수도권,지역특화,지방기업,소공인,정책자금",
    작성일: "2026-03-01",
    slug: "2026-regional-special-fund",
    html: `<div class="article-content">
<div style="background:linear-gradient(135deg,#065f46 0%,#064e3b 100%);border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid rgba(16,185,129,0.3)">
<h2 style="color:#6ee7b7;margin:0 0 16px;font-size:22px">비수도권 집중 지원 규모</h2>
<div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:16px">
<div style="flex:1;min-width:180px;text-align:center;background:rgba(16,185,129,0.15);border-radius:12px;padding:20px">
<div style="font-size:36px;font-weight:800;color:#10b981">2.44조+</div>
<div style="color:rgba(255,255,255,0.7);margin-top:4px">비수도권 배정액</div>
</div>
<div style="flex:1;min-width:180px;text-align:center;background:rgba(59,130,246,0.15);border-radius:12px;padding:20px">
<div style="font-size:36px;font-weight:800;color:#60a5fa">60%+</div>
<div style="color:rgba(255,255,255,0.7);margin-top:4px">전체 정책자금 비중</div>
</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #10b981;padding-left:16px;margin:28px 0 16px">지역별 특화 지원 프로그램</h3>

<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr style="background:rgba(16,185,129,0.15)">
<th style="padding:14px 16px;text-align:left;color:#6ee7b7;border-bottom:2px solid rgba(16,185,129,0.4)">프로그램</th>
<th style="padding:14px 16px;text-align:left;color:#6ee7b7;border-bottom:2px solid rgba(16,185,129,0.4)">대상</th>
<th style="padding:14px 16px;text-align:right;color:#6ee7b7;border-bottom:2px solid rgba(16,185,129,0.4);white-space:nowrap">한도</th>
<th style="padding:14px 16px;text-align:left;color:#6ee7b7;border-bottom:2px solid rgba(16,185,129,0.4)">특징</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">지방중소기업 육성자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">비수도권 제조·서비스업</td>
<td style="padding:12px 16px;text-align:right;color:#10b981;font-weight:600">최대 10억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">운전+시설 자금</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">지역특화산업 지원</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">광역시/도 전략산업</td>
<td style="padding:12px 16px;text-align:right;color:#10b981;font-weight:600">최대 5억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">업종 우대</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">농공단지 입주기업 지원</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">농공단지 입주 기업</td>
<td style="padding:12px 16px;text-align:right;color:#10b981;font-weight:600">우대 조건</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">우대금리 적용</td>
</tr>
<tr>
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">소공인 특화자금</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">상시근로자 10인 미만 제조업</td>
<td style="padding:12px 16px;text-align:right;color:#10b981;font-weight:600">최대 1억</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">운전+시설 자금</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #f59e0b;padding-left:16px;margin:28px 0 16px">소상공인 정책자금 종류별 안내</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:20px 0">
<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:20px">
<div style="color:#60a5fa;font-weight:700;font-size:16px;margin-bottom:10px">일반경영안정자금</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">업력 1년 이상 소상공인<br>운전자금 최대 7천만원</div>
</div>
<div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:20px">
<div style="color:#10b981;font-weight:700;font-size:16px;margin-bottom:10px">특별경영안정자금</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">재해·재난 피해 소상공인<br>긴급 운전자금 지원</div>
</div>
<div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:12px;padding:20px">
<div style="color:#f59e0b;font-weight:700;font-size:16px;margin-bottom:10px">성장기반자금</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">사업 확장·설비투자<br>시설자금 최대 2억원</div>
</div>
<div style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.3);border-radius:12px;padding:20px">
<div style="color:#a855f7;font-weight:700;font-size:16px;margin-bottom:10px">청년고용연계자금</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">청년 고용 소상공인<br>운전자금 + 금리 우대</div>
</div>
</div>

<div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:24px;margin-top:24px">
<h4 style="color:#6ee7b7;margin:0 0 12px">지역 소재 확인 기준</h4>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.8">
사업장 등기부등본 또는 임대차계약서로 확인합니다. 본사와 공장 소재지가 다른 경우, <strong>실제 사업 활동이 이루어지는 곳</strong>을 기준으로 판단합니다.
</div>
</div>

<p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:24px;line-height:1.8">
문의: 소상공인통합콜센터 1533-0100 | 중소기업통합콜센터 1357<br>
신청: 소상공인시장진흥공단 (www.semas.or.kr)
</p>
</div>`,
  },
  {
    제목: "스마트공장 구축 지원사업 2026: AI·디지털 전환 보조금 완벽 안내",
    요약: "제조업 중소기업의 스마트공장 구축을 위한 정부 보조금 프로그램과 신청 방법을 안내합니다.",
    카테고리: "기업지원",
    태그: "스마트공장,디지털전환,AI,제조업,AX스프린트",
    작성일: "2026-02-28",
    slug: "2026-smart-factory-support",
    html: `<div class="article-content">
<div style="background:linear-gradient(135deg,#1e3a5f 0%,#0c4a6e 100%);border-radius:16px;padding:32px;margin-bottom:32px;border:1px solid rgba(6,182,212,0.3)">
<h2 style="color:#67e8f9;margin:0 0 16px;font-size:22px">스마트 제조혁신 지원사업</h2>
<p style="color:rgba(255,255,255,0.85);line-height:1.8;margin:0">
중소벤처기업부는 제조업 중소·중견기업의 <strong style="color:#67e8f9">디지털·AI 전환</strong>을 위해 스마트공장 구축, AX 스프린트 트랙 등 다양한 지원사업을 운영합니다. 2026년에는 AI 도입 기업에 대한 지원이 대폭 확대되었습니다.
</p>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #06b6d4;padding-left:16px;margin:28px 0 16px">스마트공장 구축 단계별 지원</h3>

<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr style="background:rgba(6,182,212,0.15)">
<th style="padding:14px 16px;text-align:left;color:#67e8f9;border-bottom:2px solid rgba(6,182,212,0.4)">구축 수준</th>
<th style="padding:14px 16px;text-align:left;color:#67e8f9;border-bottom:2px solid rgba(6,182,212,0.4)">내용</th>
<th style="padding:14px 16px;text-align:right;color:#67e8f9;border-bottom:2px solid rgba(6,182,212,0.4);white-space:nowrap">정부 지원금</th>
<th style="padding:14px 16px;text-align:center;color:#67e8f9;border-bottom:2px solid rgba(6,182,212,0.4)">자부담</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">기초 (Lv.1~2)</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">데이터 수집, 모니터링 시스템</td>
<td style="padding:12px 16px;text-align:right;color:#22d3ee;font-weight:600">최대 1억</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">50%</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02)">
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">고도화 (Lv.3~4)</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">실시간 제어, 최적화 시스템</td>
<td style="padding:12px 16px;text-align:right;color:#22d3ee;font-weight:600">최대 3억</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">50%</td>
</tr>
<tr>
<td style="padding:12px 16px;color:#e2e8f0;font-weight:600">AI 융합 (Lv.5)</td>
<td style="padding:12px 16px;color:rgba(255,255,255,0.8)">AI 기반 자율 운영 공장</td>
<td style="padding:12px 16px;text-align:right;color:#22d3ee;font-weight:600">최대 5억</td>
<td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,0.8)">50%</td>
</tr>
</tbody>
</table>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #a855f7;padding-left:16px;margin:28px 0 16px">AX 스프린트 트랙 (신설)</h3>

<div style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.3);border-radius:12px;padding:24px;margin:20px 0">
<div style="display:flex;gap:20px;flex-wrap:wrap">
<div style="flex:1;min-width:140px;text-align:center;background:rgba(168,85,247,0.15);border-radius:10px;padding:16px">
<div style="font-size:28px;font-weight:800;color:#a855f7">1,400억</div>
<div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:4px">총 예산 규모</div>
</div>
<div style="flex:2;min-width:250px">
<div style="color:rgba(255,255,255,0.85);font-size:14px;line-height:1.8">
AI 도입·활용 기업을 대상으로 <strong style="color:#c4b5fd">대출 한도 확대</strong>와 <strong style="color:#c4b5fd">금리 우대</strong>, <strong style="color:#c4b5fd">신속 평가</strong>를 제공하는 2026년 신설 트랙입니다. 기존 정책자금과 별도로 운영되며, AI 전환 계획서 제출이 필요합니다.
</div>
</div>
</div>
</div>

<h3 style="color:#e2e8f0;border-left:4px solid #f59e0b;padding-left:16px;margin:28px 0 16px">지원 항목 상세</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:20px 0">
<div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:12px;padding:20px">
<div style="color:#22d3ee;font-weight:700;margin-bottom:8px">솔루션 구축</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">MES, ERP, SCM 등<br>스마트공장 솔루션 도입비</div>
</div>
<div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:12px;padding:20px">
<div style="color:#22d3ee;font-weight:700;margin-bottom:8px">설비 투자</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">IoT 센서, 로봇, 자동화<br>설비 구매 및 설치비</div>
</div>
<div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:12px;padding:20px">
<div style="color:#22d3ee;font-weight:700;margin-bottom:8px">컨설팅</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">스마트 제조 전략 수립<br>전문 컨설턴트 매칭</div>
</div>
<div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:12px;padding:20px">
<div style="color:#22d3ee;font-weight:700;margin-bottom:8px">인력 양성</div>
<div style="color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">재직자 AI·디지털 활용<br>교육 프로그램 제공</div>
</div>
</div>

<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:24px;margin-top:24px">
<h4 style="color:#93c5fd;margin:0 0 12px">신청 자격</h4>
<ul style="margin:0;padding-left:20px;color:rgba(255,255,255,0.8);font-size:14px;line-height:2">
<li>제조업 중소·중견기업 (업종 제한 없음)</li>
<li>스마트공장 미구축 기업 또는 고도화 희망 기업</li>
<li>AI 도입 계획서 제출 가능 기업 (AX 트랙)</li>
<li>자부담 50% 이상 부담 가능 기업</li>
</ul>
</div>

<p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:24px;line-height:1.8">
문의: 스마트제조혁신추진단 1800-2055<br>
신청: 스마트공장 지원사업 포털 (smart-factory.kr)
</p>
</div>`,
  },
];

async function createPosts() {
  for (const post of posts) {
    console.log(`\n[업로드] ${post.제목}`);

    // 1. R2에 HTML 콘텐츠 업로드
    const r2Resp = await fetch(`${WORKER_URL}/upload-content`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html: post.html, slug: post.slug }),
    });
    const r2Result = await r2Resp.json();

    if (!r2Result.success) {
      console.error(`  R2 업로드 실패: ${r2Result.error}`);
      continue;
    }
    console.log(`  R2 URL: ${r2Result.url}`);

    // 2. Airtable에 게시글 생성 (content = R2 URL)
    const boardResp = await fetch(`${WORKER_URL}/board`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        제목: post.제목,
        내용: r2Result.url,
        요약: post.요약,
        카테고리: post.카테고리,
        태그: post.태그,
        작성일: post.작성일,
        게시여부: true,
      }),
    });
    const boardResult = await boardResp.json();

    if (boardResult.success) {
      console.log(`  Airtable 등록 완료: ${boardResult.id}`);
    } else {
      console.error(`  Airtable 등록 실패: ${boardResult.error}`);
    }
  }

  // 3. 확인
  console.log("\n[확인] 게시글 목록:");
  const resp = await fetch(`${WORKER_URL}/posts?nocache=1`);
  const data = await resp.json();
  data.records.forEach((r) => console.log(`  - ${r.제목}`));
  console.log(`\n총 ${data.records.length}건`);
}

createPosts().catch(console.error);
